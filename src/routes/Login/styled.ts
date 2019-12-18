import styled from 'styled-components'

import { InlineInput } from '../../views/Input'
import { ExtraBold } from '../../views/Text'

import { BoxTemplate } from '../../views/Box'

export const Box = styled(BoxTemplate)`
  width: 488px;
  max-height: 209px;
  border-radius: 15px;
  align-self: center;
  padding: 58px 32px;
`

export const Title = styled(ExtraBold)`
  font-size: 36px;
  line-height: 1.25em;
  align-self: center;
  word-break: keep-all;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  align-self: center;
`

export const Input = styled(InlineInput)`
  text-align: right;
  width: 50px;
`

export const InputWrap = styled.div`
  margin-bottom: 32px;
`
