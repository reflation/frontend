import React from 'react'
import styled from 'styled-components'
import { white, darken_medium, primary, darken_normal } from '../styles/colors'

import { Bold, Regular } from './Text'
import Icon from './Icon'

interface Props {
  menus: string[]
  icons: string[]
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

const Header = styled.header`
  display: inline-grid;
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

const StyledIcon = styled(Icon)`
  margin: auto 20px auto auto;
  font-size: 18px;
  cursor: pointer;
`

export const HeaderWrapper = ({ menus, icons, name, active }: Props) => {
  return (
    <Header>
      <LeftMenu>
        {menus.map((val, idx) => (
          <BoldText as="li" key={idx} idx={idx} active={active}>
            {val}
          </BoldText>
        ))}
      </LeftMenu>
      <RightMenu>
        {icons.map((val, idx) => (
          <li key={idx}>
            <StyledIcon name={val} />
          </li>
        ))}
        <ItemName>
          <Regular>{name}</Regular>
        </ItemName>
      </RightMenu>
    </Header>
  )
}
