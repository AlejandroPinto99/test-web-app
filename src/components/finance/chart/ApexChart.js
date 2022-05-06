import React, { useState } from 'react'

import { ReactApexChart } from './Chart'

const ApexChart = ({setDataIndex, expensesValues, incomesValues, expensesDate, Zoom }) => {

    const series = [{
          data: expensesValues
        }, 
        {
          data: incomesValues
        }]

    const options = {
          chart: {
            
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
            events: {
              click: function(event, chartContext, config) {
                const y = config.dataPointIndex
                setDataIndex(y)
              }, 
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          yaxis: {
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: ['#A3A3A3'],
                    fontSize: '12px',
                    fontFamily: 'Lato',
                    fontWeight: 700,
                    align: 'center'
                },
              formatter: function (value) {
                return "$" + value + ".00" ;
              }
            },
          },
          xaxis: {
            type: 'category',
            categories: expensesDate,
            min: Zoom.min,
            max: Zoom.max,
            labels: {
              show: false,
              style: {
                fontSize: '1rem',
                fontFamily: 'Lato',
                color: 'white'
              }
            },
            title: {
              text: ""
            },
          },
          colors: [ '#525252', '#D8C295'],
      };

      return ( 
        <div id="chart">
            <ReactApexChart
            options={options} 
            series={series} 
            type="area" 
            height={250} />
        </div>
      )
}

export default ApexChart;
