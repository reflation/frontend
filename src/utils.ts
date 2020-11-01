import { User, SemesterEnglish2Korean } from './types/models'
import { GradePoint } from './types/dreamy'

import qs from 'simple-query-string'
import { PieChartData } from 'react-minimal-pie-chart'

export const tokenDelete = () => localStorage.removeItem('token')

export const getToken = () => localStorage.getItem('token')

export function handleToken() {
  const token = getToken()
  if (token) return token

  const { token: parsedToken } = qs.parse(window.location.search)

  if (typeof parsedToken !== 'string')
    throw Error('토큰 정보가 문자열 타입으로 구문분석 되지 않았습니다.')

  localStorage.setItem('token', parsedToken)
  return parsedToken
}

export const postProcessor = ({ name, semesters, averagePoint }: User) => {
  const credit = semesters
    .map(semester => semester.totalCredit)
    .reduce((acc: number, curr: number) => acc + curr)

  const gradePoint = semesters
    .map(({ subjects }) => subjects.map(({ grade }) => grade))
    .flat()

  const gradeRate: PieChartData[] = [
    ...gradeRange.map(({ title, color }) => ({
      title,
      color,
      value: gradePoint.filter(point => point === title).length,
    })),
    {
      title: 'D 이하',
      color: '#B76935',
      value: gradePoint.filter(point => underDPoints.includes(point)).length,
    },
  ]

  const semesterOmitOutside = semesters.filter(({ isOutside }) => !isOutside)

  const gradeRateAverages = [
    {
      name,
      data: semesterOmitOutside.map(semester => semester.averagePoint),
    },
  ]
  const semesterNamesWithOutside = semesters.map(
    ({ year, semester }) => `${year}년 ${SemesterEnglish2Korean[semester]}`
  )
  const semesterNames = semesterOmitOutside.map(
    ({ year, semester }) => `${year}년 ${SemesterEnglish2Korean[semester]}`
  )

  return {
    credit,
    gradeRate,
    gradeRateAverages,
    semesterNames,
    averagePoint,
    semesterNamesWithOutside,
  }
}

interface GradeRange {
  title: GradePoint
  color: string
}

const underDPoints: GradePoint[] = ['D+', 'D0', 'D-', 'F']

const gradeRange: GradeRange[] = [
  { title: 'A+', color: '#143642' },
  { title: 'A0', color: '#263C41' },
  { title: 'A-', color: '#38413F' },
  { title: 'B+', color: '#4A473E' },
  { title: 'B0', color: '#5C4D3C' },
  { title: 'B-', color: '#6F523B' },
  { title: 'C+', color: '#815839' },
  { title: 'C0', color: '#935E38' },
  { title: 'C-', color: '#A56336' },
]
