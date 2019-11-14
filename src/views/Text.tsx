import styled from 'styled-components'
import { black } from '../styles/colors'

interface Props {
  color?: string
  size?: number
  height?: number
}

const Parent = styled.span<Props>`
  color: ${props => props.color || black};
  font-size: ${props => props.size || 16}px;
  line-height: ${props => props.height + 'px' || 'auto'};
`

export const Light = styled(Parent)`
  font-weight: 300;
`

export const Regular = styled(Parent)`
  font-weight: 400;
`

export const Bold = styled(Parent)`
  font-weight: 700;
`

export const ExtraBold = styled(Parent)`
  font-weight: 800;
`
