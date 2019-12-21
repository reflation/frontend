import React, { Fragment } from 'react'
import { Redirect } from 'react-router'

import { Status, Result, setValid, setInvalid } from '../../store/status'

import { TypeForm } from '../../types/events'

import { Input } from '../../views/Input'
import { savePointToServer } from '../../api'
import { useDispatch } from 'react-redux'

interface FormElements extends HTMLFormElement {
  student_no: HTMLInputElement
  student_pw: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

export default ({ result }: Result) => {
  switch (result) {
    case Status.pending:
      return <Form />
    case Status.valid:
      return <Redirect to="/main" />
    case Status.invalid:
      return (
        <Fragment>
          <p>입력한 정보가 유효하지 않습니다</p>
          <Form />
        </Fragment>
      )
    default:
      return <p>알 수 없는 오류</p>
  }
}

const Form = () => {
  const dispatch = useDispatch()
  return (
    <div id="form">
      <p>학번 및 비밀번호를 입력해주세요!</p>
      <form
        onSubmit={async ({
          target: { student_no, student_pw },
          preventDefault,
        }: FormTarget) => {
          preventDefault()
          ;(await onSubmit(student_no.value, student_pw.value))
            ? dispatch(setValid())
            : dispatch(setInvalid())
        }}
      >
        <Input name="student_no" />
        <Input name="student_pw" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const onSubmit = async (student_no: string, student_pw: string) => {
  return await savePointToServer({
    student_no: parseInt(student_no),
    student_pw,
  })
}
