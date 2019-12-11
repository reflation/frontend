import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { white, darken_medium, primary, darken_normal } from '../styles/colors'

import { Bold, Regular } from './Text'
import { tokenDelete } from '../utils'

interface Props {
  items: string[]
  name: string
  active?: number
}

interface Value {
  idx?: number
  val: string
}

interface BoldProp {
  idx: number
  active?: number
}

const Logout = () => (
  <button onClick={tokenDelete}>
    로그아웃
    <Icon name="user" />
  </button>
)

const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${white};
  height: 80px;
  box-shadow: 0 1px 2px 0 ${darken_medium};
  padding-left: 150px;
  padding-right: 150px;
`

const Menu = styled.ul`
  display: flex;
  grid-auto-flow: column;
  align-self: center;
`

const LeftMenu = styled(Menu)`
  column-gap: 32px;
`

const RightMenu = styled(Menu)`
  justify-self: end;
`

const BoldText = styled(Bold)`
  color: ${(props: BoldProp) =>
    props.idx === props.active ? primary : darken_normal};
  line-height: 1.5;
  cursor: pointer;
  :hover {
    color: ${primary};
  }
`

const ItemName = styled.li`
  margin-left: 6px;
`

export default ({ items, name, active }: Props) => (
  <Header>
    <LeftMenu>
      {items.map((val, idx) => (
        <BoldText as="li" key={idx} idx={idx} active={active}>
          {val}
        </BoldText>
      ))}
    </LeftMenu>
    <RightMenu>
      <ItemName>
        <Regular>{name}</Regular>
      </ItemName>
      <Logout />
    </RightMenu>
  </Header>
)
