import React, { useState, Fragment } from 'react'
import useAsyncEffect from 'use-async-effect'

import { resData, isCodeFF } from '../control'
import { Redirect, Link } from 'react-router-dom'
import { TypeUserOmitMailid } from '../@types/models'

import Wrapper from '../views/Wrapper'

const App = () => {
  const [status, setStatus] = useState<number>()
  const [userData, setUserData] = useState<TypeUserOmitMailid>()

  useAsyncEffect(async () => {
    const { status: resStatus, data } = await resData()
    setStatus(resStatus)
    const { mailid, ...pick } = data
    setUserData(pick)
  }, [])

  const isCode = isCodeFF(status)

  const Go2Login = () => (
    <div id="error">
      {isCode(401) ? (
        <p>서버에서 사용자 정보를 찾을 수 없어요 :/</p>
      ) : (
        <p>500 오류 :/</p>
      )}
      <Link to="/login">다시 로그인하러 가기</Link>
    </div>
  )
  return (
    <Fragment>
      {isCode(204) && <Redirect to="/fetch" />}
      {isCode(401) || isCode(500) ? <Go2Login /> : <Wrapper {...userData} />}
    </Fragment>
  )
}

export default App
