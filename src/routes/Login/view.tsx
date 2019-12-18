import React from 'react'

import { Box, Title, Form, Input, InputWrap } from './styled'
import { SubmitWithText } from '../../views/Button'
import { Root } from '../../views/Box'

import { checkMailAddress } from '../../api'
import { Status, Result, setValid, setInvalid } from './../../state'
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
        <Title>{message}</Title>
      </Box>
    </Root>
  )
}

export default ({ result }: Result) => {
  const dispatch = useDispatch()

  switch (result) {
    case Status['pending']:
      return (
        <Root>
          <Box>
            <Title>학교 메일로 로그인하기</Title>
            <Form
              onSubmit={async (event: FormTarget) => {
                event.preventDefault()
                ;(await onSubmit(event.target.username.value))
                  ? dispatch(setValid())
                  : dispatch(setInvalid())
              }}
            >
              <InputWrap>
                <Input name="username" />
                <span>@jejunu.ac.kr</span>
              </InputWrap>
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

const onSubmit = async (username: string) => {
  try {
    return await checkMailAddress(username)
  } catch (e) {
    return false
  }
}
