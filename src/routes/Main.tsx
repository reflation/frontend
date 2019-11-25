import React, { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

import { loadContent, isCodeFF } from '../control'
import { Redirect, Link } from 'react-router-dom'
import { UserOmitMailid } from '../@types/models'

import Wrapper from '../views/Wrapper'

const errorMessages = {
  401: '서버에서 사용자 정보를 찾을 수 없어요 :/',
  500: '500 오류 :/',
}

const App = () => {
  const [status, setStatus] = useState<number>()
  const [userData, setUserData] = useState<UserOmitMailid>()

  const isCode = isCodeFF(status)

  useAsyncEffect(async () => {
    const { status: resStatus, data } = await loadContent()
    setStatus(resStatus)
    const { mailid, ...pick } = data
    setUserData(pick)
  }, [])

  const Go2Login = () => (
    <div id="error">
      <p>{isCode(401) ? errorMessages[401] : errorMessages[500]}</p>
      <Link to="/login">다시 로그인하러 가기</Link>
    </div>
  )
  if (isCode(undefined) || isCode(200)) return <Wrapper {...userData} />
  if (isCode(204)) return <Redirect to="/fetch" />
  return <Go2Login />
}

export default App
