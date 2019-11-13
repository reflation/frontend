import React, { useState } from 'react'
import { primary, darken_lite, black, darken_normal } from '../styles/colors'
import MinimalChart from 'react-minimal-pie-chart'

import ApexChart from 'react-apexcharts'
import { MAX_GPA, TYPE_MAX_GPA, TYPE_REQUIRE_CREADIT } from '../varables'

type DountProps =
  | {
      title: '평점'
      value: number
      totalValue: TYPE_MAX_GPA
    }
  | {
      title: '취득학점'
      value: number
      totalValue: TYPE_REQUIRE_CREADIT
    }

const CIRCLE_WIDTH = { width: '170px' }

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
      style={CIRCLE_WIDTH}
    />
  )
}

type LineChartProps = {
  categories: string[]
  series: any[]
}

export const LineChart = ({ categories, series }: LineChartProps) => {
  const defaultOption = {
    yaxis: {
      min: 2.0,
      max: MAX_GPA,
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

type PieChartProps = {
  labels: string[]
  series: number[]
}

// export const PieChart = ({labels, series}: PieChartProps) => {
//   const options = {
//     labels,
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//   }

//   return <ApexChart {options, series} type="pie" width={CIRCLE_WIDTH} />
// }
