import React from 'react'

import { Box, TitleCenter, Form, Input, Domain } from '../styled'
import { SubmitWithText } from '../../views/Button'
import { Root } from '../../views/Box'

import { checkMailAddress } from '../../api'
import { Status, Result, setValid, setInvalid } from '../../store/status'
import { TypeForm } from '../../types/events'
import { useDispatch } from 'react-redux'

interface FormElements extends HTMLFormElement {
  username: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

const Message = ({
  message,
}: {
  message: 'mail was send' | 'not found username' | '알 수 없는 오류'
}) => {
  if (message === 'mail was send') window.open('https://webmail.jejunu.ac.kr')
  return (
    <Root>
      <Box>
        <TitleCenter>{message}</TitleCenter>
      </Box>
    </Root>
  )
}

export default ({ result }: Result) => {
  const dispatch = useDispatch()

  const onSubmit = async (event: FormTarget) => {
    event.preventDefault()
    ;(await checkMailAddress(event.target.username.value))
      ? dispatch(setValid())
      : dispatch(setInvalid())
  }

  switch (result) {
    case Status['pending']:
      return (
        <Root>
          <Box style={{ justifyContent: 'center', height: '330px' }}>
            <TitleCenter>학교 메일로 로그인하기</TitleCenter>
            <Form onSubmit={onSubmit}>
              <div>
                <Input
                  autoFocus
                  autoComplete="off"
                  name="username"
                  onChange={e => {
                    e.target.style.width =
                      (e.target.value.length + 1) * 7 + 'px'
                  }}
                />
                <Domain>@jejunu.ac.kr</Domain>
              </div>
              <SubmitWithText text={'보내기'} />
            </Form>
          </Box>
        </Root>
      )
    case Status['valid']:
      return <Message message={'mail was send'} />
    case Status['invalid']:
      return <Message message={'not found username'} />
    default:
      return <Message message={'알 수 없는 오류'} />
  }
}
