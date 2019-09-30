import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { black } from '../styles/colors'

// TODO: Using Constant String Types
type names =
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

type size = 16 | 18

interface Parent {
  size?: number
  color?: string
  className?: string
}

interface Style extends Parent {
  // className: names
}

interface Props extends Parent {
  name: string
}

const IconStyle = styled.i<Style>`
  font-size: ${props => props.size || 16}px;
  color: ${props => props.color || black};
`

const Icon = ({ name, size, color, className }: Props) => (
  <IconStyle
    className={classnames('icon-' + name, className)}
    size={size ? size : undefined}
    color={color ? color : undefined}
  />
)

export default Icon
