import React from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { setSemesterIndex } from '../../store/semesterIndex'

import { RootState } from '../../store'

import { User } from '../../types/models'

import { FlexBox } from '../../styles'
import { mainBoxShadow, white } from '../../styles/colors'

import { postProcessor } from '../../utils'
import { MAX_GPA, REQUIRE_CREDIT } from '../../variables'

import { DonutChart, LineChart, PieChart } from '../../views/Charts'
import { Li, Ul } from '../../views/LeftNav'

import {
  SkeletonCircle,
  SkeletonLineChart,
  SkeletonTable,
} from '../../views/Skeleton'

import Table from '../../views/Table'
import { Regular } from '../../views/Text'

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
          key={semester}
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

export default function View({ data }: Data) {
  const {
    averagePoint,
    credit,
    gradeRate,
    gradeRateAverages,
    semesterNames,
    semesterNamesWithOutside,
  } = postProcessor(data)

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
          <DonutChart
            title={'취득학점'}
            value={credit}
            totalValue={REQUIRE_CREDIT}
          />
          <PieChart data={gradeRate} />
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

export const MainSkeleton = () => (
  <Content>
    <CircleChartWrap>
      <SkeletonCircle />
      <SkeletonCircle />
      <SkeletonCircle />
    </CircleChartWrap>
    <FlexBoxColumn>
      <SkeletonLineChart />
    </FlexBoxColumn>
    <SkeletonTable />
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
  width: 1140px;
  height: 768px;
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
  width: 100%;
  margin: 0 43px;
`

const CircleChartWrap = styled(FlexBox)`
  justify-content: space-around;
  margin: 0 80px 80px 80px;
`

const FlexBoxColumn = styled(FlexBox)`
  flex-direction: column;
`
