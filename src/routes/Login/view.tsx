import React, { Fragment } from 'react'
import { checkMailAddress } from '../../api'
import { InlineInput } from '../../views/Input'
import { ActionsOmit, Status, ViewProps } from './../../state'
import { TypeForm } from '../../types/events'

interface FormElements extends HTMLFormElement {
  username: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

export default ({ result, actions }: ViewProps) => {
  switch (result) {
    case Status['pending']:
      return (
        <Fragment>
          <p>제주대학교 메일을 입력해주세요!</p>
          <form onSubmit={onSubmit(actions)}>
            <InlineInput name="username" />
            <span>@jeju.ac.kr</span>
          </form>
        </Fragment>
      )
    case Status['valid']:
      return <p>mail was send</p>
    case Status['invalid']:
      return <p>not found username from mail server</p>
    default:
      return <p>알 수 없는 오류</p>
  }
}

const onSubmit = ({ setValid, setInvalid }: ActionsOmit) => async (
  event: FormTarget
) => {
  event.preventDefault()
  ;(await checkMailAddress(event.target.username.value))
    ? setValid()
    : setInvalid()
}
