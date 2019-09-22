interface grade {
  credit: 0 | 2 | 3 | 4
  dg_gb:
    | 'A+'
    | 'A0'
    | 'A-'
    | 'B+'
    | 'B0'
    | 'B-'
    | 'C+'
    | 'C0'
    | 'C-'
    | 'D+'
    | 'D0'
    | 'D-'
    | 'F'
  isu_cd:
    | 'A.기초교양'
    | 'B.전공탐색'
    | 'T.전인교양'
    | 'L.전공선택'
    | 'D.전공필수'
    | 'G.일반선택'
  isu_nm:
    | '기초교양'
    | '전공탐색'
    | '전인교양'
    | '전공선택'
    | '전공필수'
    | '일반선택'
  mark:
    | 4.3
    | 4.0
    | 3.7
    | 3.3
    | 3.0
    | 2.7
    | 2.3
    | 2.0
    | 1.7
    | 1.3
    | 1.0
    | 0.7
    | 0.0
  rownum: tRow_count
  subject_cd: string // 과목 코드
  subject_nm: string // 고목 이름
  term_gb: tSemester
  year: tYear
}

interface parent_grade_props {
  apply_credit: number
  avg_mark: number
  avg_mark45: number
  get_credit: number
  mark_credit: number
  rownum: 0
  tot_mark: number
}

interface current_searched_grade_summary extends parent_grade_props {
  year: tYear
  term_gb: tSemester
}

interface total_grade_summery extends parent_grade_props {
  cls_cd: string
  grade: '1학년' | '2학년' | '3학년' | '4학년'
  nm: string
  rownum: 0
  status_gb: tStatus
  student_no: tYmber
  univ_cd: tUnivs
}

declare module '*/doList/*/*.json' {
  export const GRID_DATA: grade[]
  export const BOTTOM_DATA: current_searched_grade_summary
  export const TOP_DATA: total_grade_summery
}

interface list_item {
  avg_mark: number
  get_credit: number
  outside_seq: 0 | 1
  rownum: tRow_count
  term_gb: tSemester_num
  term_mn: tSemester
  tot_mark: 32.3
  year: tYear
}

interface personal_info {
  cls_cd: number
  cls_nm: string // 학과
  course_gb: number
  dbl_dept: string | null
  group_gb: number
  nm: string // 이름,
  nm_eng: string // 영문이름
  rownum: 0
  status_gb: tStatus
  status_gb2: 1 | 0
  stu_gb: 1
  student_no: number
  univ_cd: number
}

declare module '*/doSearch.json' {
  export const TERMNOW_DATA: list_item[]
  export const PERSON_DATA: personal_info
  export const TOP_DATA: total_grade_summery
}
