import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { white, mainBoxShadow } from '../styles/colors'
import { DonutChart, LineChart } from './Charts'
import { Regular } from './Text'
import { SkletonCircle, SkletonLineChart } from './Skleton'
import { MAX_GPA, REQUIRE_CREADIT } from '../varables'
import { UserOmitMailid } from '../@types/models'
import { FlexBox } from '../styles'

const RegularMarginLeft = styled(Regular)`
  margin-left: 18px;
  text-align: left;
`

const RootBox = styled(FlexBox)`
  box-shadow: 0 19px 32px ––0 ${mainBoxShadow};
  background-color: ${white};
  border-radius: 16px;
  margin-top: 22px;
  flex-direction: column;
  padding-top: 28px;
  padding-left: 10%;
  padding-right: 10%;
  width: 80vw;
`

const CircleChartWrap = styled(FlexBox)`
  justify-content: space-around;
  margin-bottom: 92px;
`

const FlexBoxColumn = styled(FlexBox)`
  flex-direction: column;
`

enum enumSemester {
  'FIRST' = '1학기',
  'SUMMER' = '여름학기',
  'SECOND' = '2학기',
  'WINTER' = '겨울학기',
}

const Wrapper = ({
  name,
  semesters,
  averagePoint,
}: Partial<UserOmitMailid>) => {
  const [creadit, setCreadit] = useState<number>()
  const [semesterSeries, setSeries] = useState<any[]>()
  const [sememsterIndex, setIndex] = useState<string[]>()

  useEffect(() => {
    if (typeof semesters === 'undefined' || typeof name === 'undefined') return
    setCreadit(
      semesters
        .map(semester => semester.totalCredit)
        .reduce((acc: number, curr: number) => acc + curr)
    )
    const OmitOutside = semesters.filter(({ isOutside }) => !isOutside)
    setSeries([
      {
        name,
        data: OmitOutside.map(semester => semester.averagePoint),
      },
    ])
    setIndex(
      OmitOutside.map(
        ({ year, semester }) => `${year}년 ${enumSemester[semester]}`
      )
    )
  }, [semesters, name])

  return (
    <RootBox>
      <CircleChartWrap>
        {averagePoint ? (
          <DonutChart
            title={'평점'}
            value={averagePoint}
            totalValue={MAX_GPA}
          />
        ) : (
          <SkletonCircle />
        )}
        {creadit ? (
          <DonutChart
            title={'취득학점'}
            value={creadit}
            totalValue={REQUIRE_CREADIT}
          />
        ) : (
          <SkletonCircle />
        )}
      </CircleChartWrap>
      <FlexBoxColumn>
        <RegularMarginLeft>학기별 학점 현황</RegularMarginLeft>
        {sememsterIndex && semesterSeries ? (
          <LineChart categories={sememsterIndex} series={semesterSeries} />
        ) : (
          <SkletonLineChart />
        )}
      </FlexBoxColumn>
    </RootBox>
  )
}

export default Wrapper
