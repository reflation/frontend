import React from 'react'
import styled from 'styled-components'

import { HeaderWrapper } from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Main from './components/Main'

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
`

const Contents = styled.div`
  margin-top: 16px;
  margin-left: 150px;
  margin-right: 150px;
`

const App: React.FC = () => {
  return (
    <Fragment>
      <HeaderWrapper
        menus={['수업 관리', '성적 관리', '기숙사', '등록/장학', '증명발급']}
        icons={['search', 'bell']}
        name={'김무훈'}
        active={1}
      />
      <Contents>
        <Breadcrumb>홈 / 성적 관리 / 전체 학기 성적 분석</Breadcrumb>
        <Main></Main>
      </Contents>
    </Fragment>
  )
}

export default App
