import React from 'react'
import styled from 'styled-components'
import { cellBackground } from '../styles/colors'

const Table = styled.table`
  align-self: center;
`

const Thead = styled.thead`
  background-color: ${cellBackground};
  height: 54px;
`

const Cell = `
padding-left: 26px;
padding-right: 26px;
vertical-align: middle;
`

const Th = styled.th`
  ${Cell}
`

const Td = styled.td`
  text-align: 'center';
  ${Cell}
`

const Tr = styled.tr`
  height: 34px

  :nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.4);
  }

  :nth-child(even) {
    background-color: ${cellBackground};
  }
`

export default () => (
  <Table>
    <Thead>
      <tr>
        <Th>성적</Th>
        <Th>학점</Th>
        <Th>과목명</Th>
        <Th>담당교수</Th>
      </tr>
    </Thead>
    <tbody>
      <Tr>
        <Td>A</Td>
        <Td>2</Td>
        <Td align="left">소프트웨어기초영어</Td>
        <Td></Td>
      </Tr>
      {/* <Tr>
        <Td>A+</Td>
        <Td>3</Td>
        <Td align="left">오픈소스 개발 방법론</Td>
        <Td>안진현</Td>
      </Tr> */}
    </tbody>
  </Table>
)
