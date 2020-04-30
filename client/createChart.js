import Chart from "chart.js";

const colors = {
  'BTC': '#badc58',
  'BSV': '#ffbe76',
  'ETH': '#f6e58d',
  'BCH': '#ff7979'
}

const createChart = (myChartRef, cachedData, currency) =>{
  new Chart(myChartRef, {
    type: "line",
    data: {
      //Bring in data
      labels: Object.keys(cachedData),
      datasets: [
        {
          label: currency + " Exchange rate",
          data: Object.values(cachedData),
          backgroundColor: colors[currency],
          pointBackgroundColor: '#686de0',
          borderColor: '#686de0',
          pointHoverBackgroundColor: "#ff7979"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: currency + ' Exchange Rate to USD over 30 Days'
      },
    }
  });
};

export default createChart;