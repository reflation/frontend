import { User } from './models'

export type TypeRes = {
  status: number
}

export interface TypeLoad extends TypeRes {
  data: User
}
