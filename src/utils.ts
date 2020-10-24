import { User, SemesterEnglish2Korean } from './types/models'
import { gradeRangeAToC } from './types/dreamy'

import qs from 'simple-query-string'

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

const reduce = (pre: number, curr: number) => pre + curr

const sumArray = (arr: number[]) => arr.reduce(reduce)

export type PostProcessor = ReturnType<typeof postProcessor>

export const postProcessor = ({ name, semesters, averagePoint }: User) => {
  const credit = semesters
    .map(semester => semester.totalCredit)
    .reduce((acc: number, curr: number) => acc + curr)

  const gradePoint = semesters
    .map(({ subjects }) => subjects.map(({ grade }) => grade))
    .flat()

  const series = gradeRangeAToC.map(
    grade => gradePoint.filter(point => point === grade).length
  )

  const gradeRate = [...series, gradePoint.length - sumArray(series)]

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
