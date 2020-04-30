import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart.jsx';
import CryptoForm from './CryptoForm.jsx';
const App = () =>
{

  const [isLiveData, setIsLiveData ] = useState(false);
  const [selectedCurrency, setCurrency] = useState('BTC');
  const [currentUrl, setUrl] = useState('https://api.coindesk.com/v1/bpi/historical/BTC.json')
  return (<div style={{width: "80%",  margin: "0 auto"}}>
    <h1>CryptoCurrency Chart ({selectedCurrency}) </h1>
    <CryptoForm
      handleChange={() => setIsLiveData(!isLiveData)}
      isLive={isLiveData}
      currency={selectedCurrency}
      handleCurrencyChange={(currency) => setCurrency(currency)}/>
    <Chart getLiveData={isLiveData}
      requestUrl={currentUrl}
      currency={selectedCurrency}
    />
    <h4>Powered by <a href="https://www.coindesk.com/coindesk-api">CoinDesk API</a></h4>
  </div>);
}
ReactDOM.render(<App/>, document.getElementById('app'));
