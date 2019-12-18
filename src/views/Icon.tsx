import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { black } from '../styles/colors'

type Name =
  | 'user'
  | 'lock'
  | 'up'
  | 'right'
  | 'left'
  | 'down'
  | 'search'
  | 'mail'
  | 'check'
  | 'bell'
  | 'upload'
  | 'print'
  | 'table'

type Size = 16 | 18

interface Parent {
  size?: Size
  color?: string
  className?: string
}

interface Props extends Parent {
  name: Name
}

const IconStyle = styled.i<Parent>`
  font-size: ${props => props.size || 16}px;
  color: ${props => props.color || black};
`

export default ({ name, size, color, className }: Props) => (
  <IconStyle
    className={classnames('icon-' + name, className)}
    size={size}
    color={color}
  />
)
