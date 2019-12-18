import styled from 'styled-components'
import { white, darken_lite, black, darken_normal } from '../styles/colors'

export const Li = styled.li<{ isSelect?: true }>`
  width: 120px;
  height: 48px;
  margin-left: 24px;
  margin-right: 16px;
  background-color: ${white};
  line-height: 3;
  color: ${props => (props.isSelect ? black : darken_normal)};
`

export const Ul = styled.ul`
  border-right: 1px solid ${darken_lite};
`
