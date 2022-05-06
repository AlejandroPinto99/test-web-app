import React from 'react'

import { ReactApexChart } from './Chart'

import {get7days, DateChartFormat} from '../../../helpers/chartHelper'

const ApexChart = () => {

    const days = DateChartFormat(get7days()).reverse();
      
    const series = [{
          name: 'series1',
          data: [31, 103, 270, 420, 350, 109, 300]
        }]

    const options = {
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'category',
            categories: days,
            labels: {
              style: {
                fontSize: '1rem',
                fontFamily: 'Lato',
                color: '#525252'
              }
          }
          },
          colors: ['#D8C295'],
      };

      return ( 
        <div id="chart">
            <ReactApexChart
            options={options} 
            series={series} 
            type="area" 
            height={450} />
        </div>
      )
}

export default ApexChart;