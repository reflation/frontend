import qs from 'querystring'

import { User, SemesterEnglish2Korean } from './types/models'
import { gradeRangeAToC } from './types/dreamy'

export const saveToken = () => {
  localStorage.setItem('token', qs.parse(window.location.search)[
    '?token'
  ] as string)
}

export const tokenDelete = () => localStorage.removeItem('token')

export const getToken = () => localStorage.getItem('token')

const reduce = (pre: number, curr: number) => pre + curr

const sumArray = (arr: number[]) => arr.reduce(reduce)

export type PostProcessor = ReturnType<typeof postProcesser>

export const postProcesser = ({ name, semesters, averagePoint }: User) => {
  const creadit = semesters
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
    creadit,
    gradeRate,
    gradeRateAverages,
    semesterNames,
    averagePoint,
    semesterNamesWithOutside,
  }
}
