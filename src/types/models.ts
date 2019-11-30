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

export type Semester = {
  subjects: Subject[]
  averagePoint: number // Float
  totalCredit: number
  isOutside: boolean
  semester: 'FIRST' | 'SUMMER' | 'SECOND' | 'WINTER'
  year: number
}

export type User = {
  name: string
  mailid: string
  studentID: number
  averagePoint: number
  totalPoint: number
  major: string
  subMajor: string | null
  college: College
  semesters: Semester[]
}

export type UserOmitMailid = Omit<User, 'mailid'>
