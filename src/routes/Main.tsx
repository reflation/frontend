import React, { useState, Fragment } from 'react'
import useAsyncEffect from 'use-async-effect'

import { resData, isCodeFF } from '../control'
import { Redirect, Link } from 'react-router-dom'
import { TypeUser } from '../@types/models'

const App = () => {
  const [status, setStatus] = useState<number>()
  const [userData, setUserData] = useState<TypeUser>()

  useAsyncEffect(async () => {
    const { status: resStatus, data } = await resData()
    setStatus(resStatus)
    setUserData(data)
  }, [])

  const isCode = isCodeFF(status)

  const Go2Login = () => (
    <div id="error">
      {isCode(401) && <p>서버에서 사용자 정보를 찾을 수 없어요 :/</p>}
      {isCode(500) && <p>500 오류 :/</p>}
      <Link to="/login">다시 로그인하러 가기</Link>
    </div>
  )

  if (isCode(undefined)) return <p id="loading">불러오는 중..</p>
  return (
    <Fragment>
      {isCode(200) && (
        <p>
          <span id="result">캐싱 된 데이터:</span> {console.log(userData)}
        </p>
      )}
      {isCode(204) && <Redirect to="/fetch" />}
      {(isCode(401) || isCode(500)) && <Go2Login />}
    </Fragment>
  )
}

export default App
