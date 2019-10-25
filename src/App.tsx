import React, { FormEvent, useState, Fragment } from 'react'

import logo from './logo.svg'
import './App.css'

import { Input } from './view/Input'
import { submitID } from './control'

const App: React.FC = () => {
  const [flag, setFlag] = useState<boolean>()
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // @ts-ignore
    const { value }: { value: string } = e.target[0]
    setFlag(await submitID(value))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  )
}

export default App
