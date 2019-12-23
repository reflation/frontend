import styled from 'styled-components'

import { InlineInput } from '../views/Input'
import { ExtraBold, Regular } from '../views/Text'

import { BoxTemplate } from '../views/Box'

export const Box = styled(BoxTemplate)`
  width: 430px;
  border-radius: 15px;
  align-self: center;
  padding: 58px 32px;
`

const Title = styled(ExtraBold)`
  font-size: 36px;
  line-height: 1.25em;
  word-break: keep-all;
`

export const TitleCenter = styled(Title)`
  text-align: center;
`

export const TitleLeft = styled(Title)`
  align-self: flex-start;
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 32px;
  align-self: center;
  align-items: center;
`

export const Input = styled(InlineInput)`
  text-align: right;
  width: 50px;
`

export const InputWrap = styled.div`
  margin-bottom: 32px;
`

export const Domain = styled(Regular)`
  font-size: 18px;
`
