import React, { Fragment } from 'react'
import { Redirect } from 'react-router'

import { FlexBox } from '../../styles'

import Header from '../../views/Header'
import Wrapper from '../../views/Wrapper'
import { Ul, Li } from '../../views/LeftNav'
import styled from 'styled-components'
import { mainBoxShadow, white } from '../../styles/colors'

import { UserOmitMailid } from '../../types/models'
import { Result, Status } from '../../state'

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

type Data = { data: UserOmitMailid | null }

export default ({ result, data }: Result & Data) => {
  switch (result) {
    case Status['pending']:
      return <View data={data} />
    case Status['valid']:
      return <View data={data} />
    case Status['invalid']:
      return <Redirect to="/login" />
    default:
      return <p>알 수 없는 오류</p>
  }
}

const View = ({ data }: Data) => (
  <Fragment>
    <Header items={['성적 관리']} active={0} name={'김무훈'} />
    <Root>
      <Ul>
        <Li>2018년 1학기</Li>
        <Li>2018년 2학기</Li>
        <Li isSelect>2018년 겨울 학기</Li>
        <Li>2019년 1학기</Li>
      </Ul>
      <Wrapper {...data} />
    </Root>
  </Fragment>
)
