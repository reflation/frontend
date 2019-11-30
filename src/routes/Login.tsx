import React, { useState, Fragment } from 'react'

import { Input } from '../views/Input'
import { submitID } from '../control'
import { TypeForm } from '../types/events'

interface FormElements extends HTMLFormElement {
  mailid: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

const App: React.FC = () => {
  const [flag, setFlag] = useState<boolean>()
  const onSubmit = async (event: FormTarget) => {
    event.preventDefault()
    setFlag(await submitID(event.target.mailid.value))
  }
  return (
    <Fragment>
      {typeof flag === 'undefined' ? (
        <Fragment>
          <p>제주대학교 메일 ID를 입력해주세요!</p>
          <form onSubmit={onSubmit}>
            <Input name="mailid" />
          </form>
        </Fragment>
      ) : flag ? (
        <p id="result">mail was send</p>
      ) : (
        <p id="result">not found username from mail server</p>
      )}
    </Fragment>
  )
}

export default App
