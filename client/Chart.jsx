import React, { useEffect } from 'react';
import Chart from "chart.js";
import axios from 'axios';
import createChart from './createChart';
import {cryptoCompareKey} from '../config/index';

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  getCachedData (cacheName) {
    return (localStorage[cacheName]) ? JSON.parse(localStorage.getItem(cacheName)) : null;
    // return !!localStorage.getItem(cacheName) && JSON.parse(localStorage.getItem(cacheName));
  }

  /**
   * @param {string} cacheName - Name of cacheProperty in localStorage
   * @param {string} requestUrl - URL for data to be fetched
   * @param {string} requestedData - Property sent into database
   */
  setCacheData (cacheName, requestUrl, requestedData) {
    let cachedData = this.getCachedData(cacheName);
    const myChartRef = this.chartRef.current.getContext('2d');

    if (!cachedData || this.props.getLiveData) {
      if (cacheName === "BTC") {
        axios.get(requestUrl)
          .then(res => {
            console.log('Live Data requested & Cached')
            localStorage.setItem(cacheName, JSON.stringify(res.data[requestedData]));
            cachedData = this.getCachedData(cacheName);
            console.log(cachedData)
            createChart(myChartRef, cachedData);
          })
      } else {
        axios.get('https://min-api.cryptocompare.com/data/v2/histoday', {
          params: {
            api_key:cryptoCompareKey,
            fsym: this.props.currency,
            tsym: 'USD',
            limit: '30'
          }
        })
          .then((res)=>{
            const objData = {};
            console.log(res)
            res.data.Data.Data.forEach(data=>{
              objData[data.time] = data.close;
              console.log(data);
            });
            return objData;
          })
          .then(res=>{
            // console.log(res);
              console.log('Live Data requested & Cached')
              localStorage.setItem(cacheName, JSON.stringify(res));
              cachedData = this.getCachedData(cacheName);
              console.log(cachedData)
              createChart(myChartRef, cachedData, cacheName);
          });
      }
    } else {
      createChart(myChartRef, cachedData, cacheName);
    }

  }

  componentDidMount() {
    Chart.defaults.global.defaultFont = "'Lato', 'sans-serif'"

    this.setCacheData(this.props.currency, this.props.requestUrl, 'bpi');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.getLiveData === false) {
      this.setCacheData(this.props.currency, this.props.requestUrl, 'bpi');
    }
  }

  render() {
    return (<div style={{maxHeight: "500px" }}>
      <canvas id="myChart" ref={this.chartRef} width="200" height="400"></canvas>
    </div>)
  }
}

export default CryptoChart;