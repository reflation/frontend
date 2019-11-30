import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { white, mainBoxShadow } from '../styles/colors'
import { DonutChart, LineChart, PieChart } from './Charts'
import { Regular } from './Text'
import { SkletonCircle, SkletonLineChart } from './Skleton'
import { MAX_GPA, REQUIRE_CREADIT } from '../varables'
import { FlexBox } from '../styles'

import { UserOmitMailid } from '../domain/models'
import { A2C, GradePoint } from '../domain/dreamy'

import { count, sumArray } from '../utils'

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

enum Semester {
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
  const [gradePer, setGradePer] = useState<number[]>()

  useEffect(() => {
    if (!semesters || !name) return
    setCreadit(
      semesters
        .map(semester => semester.totalCredit)
        .reduce((acc: number, curr: number) => acc + curr)
    )
    const flatGrades = semesters
      .map(semester => semester.subjects.map(subject => subject.grade))
      .flat()
    const A2C_NUM = A2C.map(itm => count<GradePoint>(flatGrades, itm))

    setGradePer([...A2C_NUM, flatGrades.length - sumArray(A2C_NUM)])

    const OmitOutside = semesters.filter(({ isOutside }) => !isOutside)
    setSeries([
      {
        name,
        data: OmitOutside.map(semester => semester.averagePoint),
      },
    ])
    setIndex(
      OmitOutside.map(({ year, semester }) => `${year}년 ${Semester[semester]}`)
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
        {gradePer ? (
          <PieChart labels={[...A2C, 'D 이하']} series={gradePer} />
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
