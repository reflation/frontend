import React from 'react'
import { Redirect } from 'react-router'

import { Root } from '../../views/Box'
import { SubmitWithText } from '../../views/Button'
import { Box, TitleCenter, TitleLeft, Form } from '../styled'
import { InputUser, InputPass } from '../../views/Input'

import { selector, Status, setValid, setInvalid } from '../../store/status'

import { TypeForm } from '../../types/events'

import { savePointToServer } from '../../api'

import { useDispatch, useSelector } from 'react-redux'

interface FormElements extends HTMLFormElement {
  student_no: HTMLInputElement
  student_pw: HTMLInputElement
}

interface FormTarget extends TypeForm {
  target: FormElements
}

enum Result {
  invalid = '입력한 정보가 유효하지 않습니다',
  unknown = '알 수 없는 오류',
}

export default () => {
  const { result } = useSelector(selector)
  switch (result) {
    case Status.pending:
      return <View />
    case Status.valid:
      return <Redirect to="/main" />
    case Status.invalid:
      return <NotValid result={Result.invalid} />
    default:
      return <NotValid result={Result.unknown} />
  }
}

const View = () => {
  const dispatch = useDispatch()
  const onSubmit = async (e: FormTarget) => {
    e.preventDefault()
    const {
      target: { student_no, student_pw },
    } = e
    ;(await fetching(student_no.value, student_pw.value))
      ? dispatch(setValid())
      : dispatch(setInvalid())
  }
  return (
    <Root>
      <Box style={{ height: '370px' }}>
        <TitleLeft as="h2">하영드리미에서</TitleLeft>
        <TitleLeft as="h2">학적 데이터 받아오기</TitleLeft>
        <Form onSubmit={onSubmit}>
          <InputUser />
          <InputPass />
          <SubmitWithText text={'받아오기'} />
        </Form>
      </Box>
    </Root>
  )
}

const NotValid = ({ result }: { result: Result }) => (
  <Root>
    <Box>
      <TitleCenter as="h2">{result}</TitleCenter>
    </Box>
    <Redirect
      to={`/fetch?${result === Result.invalid ? 'invalid' : 'unknown'}`}
    />
  </Root>
)

const fetching = async (student_no: string, student_pw: string) => {
  return await savePointToServer({
    student_no: parseInt(student_no),
    student_pw,
  })
}
