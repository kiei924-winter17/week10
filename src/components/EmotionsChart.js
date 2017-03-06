var React = require('react')
var ReactChartJS = require('react-chartjs-2')
var {Bar} = ReactChartJS

var EmotionsChart = React.createClass({

  render: function() {
    // Create two arrays - one for emotion names, and one for the values
    var names = []
    var values = []
    Object.keys(this.props.emotionsData).forEach(function(name) {
      names.push(name)
      values.push(this.props.emotionsData[name])
    }.bind(this))

    // ChartJS data object
    var data = {
      labels: names,
      datasets: [
        {
          label: "Emotions",
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
          fontSize: 8,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: values
        }
      ]
    }

    // ChartJS options
    var options = {
      maintainAspectRatio: false,
      scales: { 
        yAxes: [{
          display: false
        }]
      }
    }

    return (
      <Bar data={data} height={480} options={options} />
    )
  }
})

module.exports = EmotionsChart