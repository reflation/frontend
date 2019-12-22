import React from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { setSemesterIndex } from '../../store/semesterIndex'

import { RootState } from '../../store'

import { User } from '../../types/models'

import { FlexBox } from '../../styles'
import { mainBoxShadow, white } from '../../styles/colors'

import { postProcesser } from '../../utils'
import { MAX_GPA, REQUIRE_CREADIT } from '../../varables'

import { DonutChart, LineChart, PieChart } from '../../views/Charts'
import { Li, Ul } from '../../views/LeftNav'

import {
  SkletonCircle,
  SkletonLineChart,
  SkletonTable,
} from '../../views/Skleton'

import Table from '../../views/Table'
import { Regular } from '../../views/Text'
import { gradeRangeAToC } from '../../types/dreamy'

type Data = { data: User }

const ClickableLi = styled(Li)`
  cursor: pointer;
`

const LeftNav = ({
  semesters,
  selectedIndex,
}: {
  semesters: string[]
  selectedIndex: number
}) => {
  const dispatch = useDispatch()
  return (
    <Ul>
      {semesters.map((semester, index) => (
        <ClickableLi
          isSelect={selectedIndex === index}
          onClick={() => dispatch(setSemesterIndex(index))}
        >
          {semester}
        </ClickableLi>
      ))}
    </Ul>
  )
}

const selector = ({ semesterIndex }: RootState) => ({ semesterIndex })

export default ({ data }: Data) => {
  const {
    averagePoint,
    creadit,
    gradeRate,
    gradeRateAverages,
    semesterNames,
    semesterNamesWithOutside,
  } = postProcesser(data)

  const { semesterIndex } = useSelector(selector)

  return (
    <Root>
      <LeftNav
        semesters={semesterNamesWithOutside}
        selectedIndex={semesterIndex}
      />
      <Content>
        <CircleChartWrap>
          <DonutChart
            title={'평점'}
            value={averagePoint}
            totalValue={MAX_GPA}
          />
          <div style={{ marginLeft: '2em' }}>
            <DonutChart
              title={'취득학점'}
              value={creadit}
              totalValue={REQUIRE_CREADIT}
            />
          </div>
          <PieChart labels={[...gradeRangeAToC, 'D 이하']} series={gradeRate} />
        </CircleChartWrap>
        <FlexBoxColumn>
          <RegularMarginLeft>학기별 학점 현황</RegularMarginLeft>
          <LineChart categories={semesterNames} series={gradeRateAverages} />
        </FlexBoxColumn>
        <Table subjects={data.semesters[semesterIndex].subjects} />
      </Content>
    </Root>
  )
}

export const MainSkleton = () => (
  <Content>
    <CircleChartWrap>
      <SkletonCircle />
      <SkletonCircle />
      <SkletonCircle />
    </CircleChartWrap>
    <FlexBoxColumn>
      <SkletonLineChart />
    </FlexBoxColumn>
    <SkletonTable />
  </Content>
)

const Root = styled(FlexBox)`
  box-shadow: 0 19px 32px ––0 ${mainBoxShadow};
  background-color: ${white};
  border-radius: 16px;
  margin-top: 54px;
  margin-left: 150px;
  margin-right: 150px;
  flex-direction: row;
  padding-top: 24px;
  padding-bottom: 24px;
`

const RegularMarginLeft = styled(Regular)`
  margin-left: 18px;
  text-align: left;
`

const Content = styled(FlexBox)`
  box-shadow: 0 19px 32px ––0 ${mainBoxShadow};
  background-color: ${white};
  border-radius: 16px;
  margin-top: 22px;
  flex-direction: column;
  padding-top: 28px;
  padding-left: 10%;
  padding-right: 10%;
`

const CircleChartWrap = styled(FlexBox)`
  justify-content: space-around;
  margin-bottom: 92px;
`

const FlexBoxColumn = styled(FlexBox)`
  flex-direction: column;
`
