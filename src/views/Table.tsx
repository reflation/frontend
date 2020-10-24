import React from 'react'
import styled from 'styled-components'
import { cellBackground } from '../styles/colors'
import { Subject } from '../types/models'
import { GradeNum } from '../types/dreamy'

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

export default ({ subjects }: { subjects: Subject[] }) => (
  <Table>
    <Thead>
      <tr>
        <Th>성적</Th>
        <Th>학점</Th>
        <Th>과목명</Th>
        <Th>이수구분</Th>
      </tr>
    </Thead>
    <tbody>
      {subjects.map(({ grade, title, course }) => (
        <Tr key={title}>
          <Td>{grade}</Td>
          <Td>{GradeNum[grade]}</Td>
          <Td align="left">{title}</Td>
          <Td align="left">{course}</Td>
        </Tr>
      ))}
    </tbody>
  </Table>
)
