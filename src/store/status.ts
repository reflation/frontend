import { createAction, createReducer } from '@reduxjs/toolkit'

import { setData } from './userInfo'
import { RootState } from '.'

export enum Status {
  'invalid',
  'valid',
  'pending',
}

export type Result = { result: Status }

export type Actions = {
  setPending: typeof setPending
  setValid: typeof setValid
  setInvalid: typeof setInvalid
  setData?: typeof setData
}

const title = 'result'

export const setPending = createAction(`${title}/pending`)
export const setValid = createAction(`${title}/valid`)
export const setInvalid = createAction(`${title}/invalid`)

const initialState = Status.pending

export default createReducer(initialState, {
  [setPending.type]: _ => Status.pending,
  [setValid.type]: _ => Status.valid,
  [setInvalid.type]: _ => Status.invalid,
})

export const selector = ({ result }: RootState) => ({ result })
