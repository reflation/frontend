import React, { Fragment } from 'react'
import { Redirect } from 'react-router'

import { ViewProps, Status, ActionsOmit } from '../../state'

import { TypeForm } from '../../types/events'

import { Input } from '../../views/Input'
import { savePointToServer } from '../../api'

interface FormElements extends HTMLFormElement {
  student_no: HTMLInputElement
  student_pw: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

export default ({ result, actions }: ViewProps) => {
  switch (result) {
    case Status['pending']:
      return <Form actions={actions} />
    case Status['valid']:
      return <Redirect to="/main" />
    case Status['invalid']:
      return (
        <Fragment>
          <p>입력한 정보가 유효하지 않습니다</p>
          <Form actions={actions} />
        </Fragment>
      )
    default:
      return <p>알 수 없는 오류</p>
  }
}

const Form = ({ actions }: { actions: ActionsOmit }) => (
  <div id="form">
    <p>학번 및 비밀번호를 입력해주세요!</p>
    <form onSubmit={onSubmit(actions)}>
      <Input name="student_no" />
      <Input name="student_pw" type="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
)

const onSubmit = ({ setValid, setInvalid }: ActionsOmit) => async (
  event: FormTarget
) => {
  event.preventDefault()
  ;(await savePointToServer({
    student_no: parseInt(event.target.student_no.value),
    student_pw: event.target.student_pw.value,
  }))
    ? setValid()
    : setInvalid()
}
