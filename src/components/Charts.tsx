import React from 'react'
import {
  primary,
  darken_lite,
  black,
  darken_normal,
  white,
} from '../styles/colors'
import MinimalChart, { PieChartData } from 'react-minimal-pie-chart'

import ApexChart from 'react-apexcharts'

interface DountProps {
  title: '평점' | '취득학점'
  value: number
  totalValue: 4.3 | 130
}

interface PieProp {
  data: PieChartData[]
}

interface LineChartProps {
  categories: string[] | null
  series: any[]
}

const circleChartsWidth = { width: '170px' }

export const DonutChart = ({ title, value, totalValue }: DountProps) => {
  const isGPA = title === '평점'

  return (
    <MinimalChart
      data={[
        {
          title,
          value,
          color: primary,
        },
      ]}
      injectSvg={() => (
        <svg>
          <text
            x={isGPA ? 40 : 29}
            y="27"
            style={{ fontSize: '12px', fill: black }}
          >
            {title}
          </text>
          <text
            x={isGPA ? 44 : 42}
            y="75"
            style={{ fontSize: '9px', fill: darken_normal }}
          >
            {totalValue}
          </text>
        </svg>
      )}
      startAngle={90}
      totalValue={totalValue}
      lineWidth={30}
      background={darken_lite}
      rounded
      animate
      // TODO
      // label={() => <span>{title}</span>}
      label
      labelPosition={0}
      labelStyle={{
        fontSize: '21px',
        fill: black,
      }}
      style={circleChartsWidth}
    />
  )
}

export const PieChart = ({ data }: PieProp) => (
  <MinimalChart
    data={data}
    labelStyle={{ fontSize: '12px', fill: white }}
    style={circleChartsWidth}
    animate
    label
  />
)

export const LineChart = ({ categories, series }: LineChartProps) => {
  const defaultOption = {
    yaxis: {
      min: 2.0,
      max: 4.3,
      labels: {
        formatter: (v: number) => v.toPrecision(2),
      },
      tickAmount: 2,
    },
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      fontFamily: 'NanumSquareRound',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    xaxis: {
      categories,
    },
    plotOptions: {
      dataLabels: {
        name: {
          show: false,
        },
      },
    },
  }
  return (
    <div id="chart">
      <ApexChart
        options={defaultOption}
        series={series}
        type="line"
        height="150px"
      />
    </div>
  )
}
