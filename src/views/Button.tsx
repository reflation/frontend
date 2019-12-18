import React from 'react'

import styled from 'styled-components'
import { primary, white } from '../styles/colors'
import { Bold } from './Text'

const Submit = styled.button`
  height: 50px;
  border-radius: 27px;
  background-color: ${primary};
  marign: 11px 52px;
  cursor: pointer;
`

const Text = styled(Bold)`
  color: ${white};
  font-size: 24px;
  text-align: center;
`

export const SubmitWithText = ({ text }: { text: '보내기' | 'LOGIN' }) => (
  <Submit>
    <Text>{text}</Text>
  </Submit>
)
