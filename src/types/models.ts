import { GradePoint, Course, College } from './dreamy'

export type LoginRes = { mailid: string }

export interface UserNoPw {
  student_no: number
  student_pw: string
}

type Subject = {
  title: string
  code: string
  grade: GradePoint
  course: Course
}

export enum SemesterEnglish2Korean {
  'FIRST' = '1학기',
  'SUMMER' = '여름학기',
  'SECOND' = '2학기',
  'WINTER' = '겨울학기',
}

export type Semester = {
  subjects: Subject[]
  averagePoint: number // Float
  totalCredit: number
  isOutside: boolean
  semester: keyof typeof SemesterEnglish2Korean
  year: number
}

export type User = {
  name: string
  studentID: number
  averagePoint: number
  totalPoint: number
  major: string
  subMajor: string | null
  college: College
  semesters: Semester[]
}
