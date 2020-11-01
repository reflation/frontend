import React, { useCallback, useState } from 'react'

import MinimalChart, { PieChartData } from 'react-minimal-pie-chart'
import ApexChart from 'react-apexcharts'

import ReactTooltip from 'react-tooltip'

import { MAX_GPA, TYPE_MAX_GPA, TYPE_REQUIRE_CREDIT } from '../variables'
import { primary, darken_lite, black, darken_normal } from '../styles/colors'

type DonutProps =
  | {
      title: '평점'
      value: number
      totalValue: TYPE_MAX_GPA
    }
  | {
      title: '취득학점'
      value: number
      totalValue: TYPE_REQUIRE_CREDIT
    }

const PieStyle = { width: '170px' }

export const DonutChart = ({ title, value, totalValue }: DonutProps) => {
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
      label
      labelPosition={0}
      labelStyle={{
        fontSize: '21px',
        fill: black,
      }}
      style={PieStyle}
    />
  )
}

type LineChartProps = {
  categories: string[]
  series: any[]
}

const lineOption = {
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
  plotOptions: {
    dataLabels: {
      name: {
        show: false,
      },
    },
  },
}

export const LineChart = ({ categories, series }: LineChartProps) => {
  return (
    <div id="chart">
      <ApexChart
        options={{ ...lineOption, xaxis: { categories } }}
        series={series}
        type="line"
        height="150px"
      />
    </div>
  )
}

interface PieChartProps {
  data: PieChartData[]
}

const labelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
}

function makeTooltipContent(entry: PieChartData) {
  return `${entry.title}: ${entry.value} 개`
}

export const PieChart = ({ data }: PieChartProps) => {
  const [hovered, setHoverd] = useState<number | null>(null)
  const tooltipCallback = useCallback(
    () => typeof hovered === 'number' && makeTooltipContent(data[hovered]),
    [data, hovered]
  )
  return (
    <div data-tip="" data-for="chart">
      <MinimalChart
        data={data}
        style={PieStyle}
        animate
        startAngle={-90}
        labelStyle={labelStyle}
        onMouseOver={(_, __, index) => {
          setHoverd(index)
        }}
        onMouseOut={() => setHoverd(null)}
      />
      <ReactTooltip id="chart" getContent={tooltipCallback} />
    </div>
  )
}
