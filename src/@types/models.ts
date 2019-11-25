export type LoginRes = { mailid: string }

export interface UserNoPw {
  student_no: number
  student_pw: string
}

export type Semester = {
  averagePoint: number // Float
  totalCredit: number
  isOutside: boolean
  semester: 'FIRST' | 'SUMMER' | 'SECOND' | 'WINTER'
  year: number
}

export type User = {
  name: string
  mailid: string
  averagePoint: number // Float
  semesters: Semester[]
}

export type UserOmitMailid = Omit<User, 'mailid'>
