// const DATA_COUNT = 5;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
// const data1 = {
//   labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Object.values(Utils.CHART_COLORS),
//     }
//   ]
// };

const data1 = {
  labels: ["facebook", "Google", "Microsoft"],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const config1 = {
  type: 'doughnut',
  data: data1,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
  },
};

const ctx1 = document.getElementById("chart-1")
const chart1 = new Chart(ctx1,config1)

const data2 = {
  labels: ["January", "February", "March", "April", "May", "June"," July"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      '#17EBA0',
      // 'rgba(255, 99, 132, 0.2)',
      '#FFEB59',
      // 'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      '#17EBA0',
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1,
    borderRadius: Number.MAX_VALUE
  }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        indexAxis: 'y',
      }
  };

const ctx2 = document.getElementById("chart-2")
const chart2 = new Chart(ctx2,config2)