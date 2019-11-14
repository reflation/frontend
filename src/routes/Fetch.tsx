import React, { useState, useEffect, Fragment } from 'react'

import { fetchConent, isCodeFF } from '../control'
import { Input } from '../views/Input'
import { saveToken } from '../utils'
import { Redirect } from 'react-router-dom'
import { TypeForm } from '../@types/events'

interface FormElements extends HTMLFormElement {
  student_no: HTMLInputElement
  student_pw: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

const App = () => {
  useEffect(saveToken, [])

  const [status, setStatus] = useState<number>()
  const isCode = isCodeFF(status)

  const onSubmit = async (event: FormTarget) => {
    event.preventDefault()
    setStatus(
      await fetchConent({
        student_no: parseInt(event.target.student_no.value),
        student_pw: event.target.student_pw.value,
      })
    )
  }

  const Form = () => (
    <div id="form">
      <p>학번 및 비밀번호를 입력해주세요!</p>
      <form onSubmit={onSubmit}>
        <Input name="student_no" type="number" />
        <Input name="student_pw" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )

  if (isCode(undefined)) return <Form />
  return (
    <Fragment>
      ~~
      {isCode(201) && <Redirect to="/main" />}
      {isCode(401) && (
        <div id="invalid">
          <p>입력한 정보가 유효하지 않습니다</p>
          <Form />
        </div>
      )}
      {isCode(500) && <p id="error">500 오류</p>}
    </Fragment>
  )
}

export default App
