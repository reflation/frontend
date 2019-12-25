import React from 'react'
import styled from 'styled-components'

import { darken_ultra, transparent, black } from '../styles/colors'
import { User, Lock } from './Icon'

export const Input = styled.input`
  padding: 0px 12px;
  border-radius: 18px;
  font-size: 16px;
  line-height: 2;
  background-color: ${transparent};
  padding: 0 12px;
  ::placeholder {
    color: ${black};
    font-family: NanumSquareRound;
  }
`

export const InlineInput = styled(Input)`
  background-color: ${darken_ultra};
  display: inline-block;
`

const Wrap = styled.div`
  border-radius: 18px;
  padding-left: 14px;
  padding-right: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${darken_ultra};
  margin-bottom: 16px;
  width: 97%;
`

enum InputUserOrPass {
  'username',
  'password',
}

const InputWrap = ({ type }: { type: InputUserOrPass }) => (
  <Wrap>
    {type === InputUserOrPass.username ? (
      <>
        <User /> <Input name="student_no" placeholder="학번" />
      </>
    ) : (
      <>
        <Lock />
        <Input name="student_pw" type="password" placeholder="비밀번호" />
      </>
    )}
  </Wrap>
)

export const InputUser = () => <InputWrap type={InputUserOrPass.username} />
export const InputPass = () => <InputWrap type={InputUserOrPass.password} />
