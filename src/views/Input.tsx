import styled from 'styled-components'
import { darken_ultra } from '../styles/colors'

export const Input = styled.input`
  padding: 7px 12px;
  border-radius: 18px;
  background-color: ${darken_ultra};
`

export const InlineInput = styled(Input)`
  display: inline-block;
`
