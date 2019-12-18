import React, { Fragment } from 'react'
import styled from 'styled-components'

import { User } from '../../types/models'

import { FlexBox } from '../../styles'
import { mainBoxShadow, white } from '../../styles/colors'

import { postProcesser } from '../../utils'
import { MAX_GPA, REQUIRE_CREADIT } from '../../varables'

import { DonutChart, LineChart, PieChart } from '../../views/Charts'
import Header from '../../views/Header'
import { Li, Ul } from '../../views/LeftNav'

import { SkletonCircle, SkletonLineChart } from '../../views/Skleton'

import Table from '../../views/Table'
import { Regular } from '../../views/Text'
import { gradeRangeAToC } from '../../types/dreamy'

type Data = { data: User }

export default ({ data }: Data) => {
  const {
    averagePoint,
    creadit,
    gradeRate,
    gradeRateAverages,
    semesterNames,
  } = postProcesser(data)
  return (
    <Fragment>
      <Header items={['성적 관리']} active={0} name={'김무훈'} />
      <Root>
        <Ul>
          <Li>2018년 1학기</Li>
          <Li>2018년 2학기</Li>
          <Li isSelect>2018년 겨울 학기</Li>
          <Li>2019년 1학기</Li>
        </Ul>
        <RootBox>
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
            <PieChart
              labels={[...gradeRangeAToC, 'D 이하']}
              series={gradeRate}
            />
          </CircleChartWrap>
          <FlexBoxColumn>
            <RegularMarginLeft>학기별 학점 현황</RegularMarginLeft>
            <LineChart categories={semesterNames} series={gradeRateAverages} />
          </FlexBoxColumn>
          <Table />
        </RootBox>
      </Root>
    </Fragment>
  )
}

export const MainSkleton = () => (
  <RootBox>
    <CircleChartWrap>
      <SkletonCircle />
      <SkletonCircle />
      <SkletonCircle />
    </CircleChartWrap>
    <FlexBoxColumn>
      <SkletonLineChart />
    </FlexBoxColumn>
    <Table />
  </RootBox>
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
