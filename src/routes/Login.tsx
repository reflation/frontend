import React, { FormEvent, useState, Fragment } from 'react'

import { Input } from '../view/Input'
import { submitID } from '../control'

const App: React.FC = () => {
  const [flag, setFlag] = useState<boolean>()
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    // @ts-ignore
    const { value }: { value: string } = event.target[0]
    setFlag(await submitID(value))
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
