import { createAction, createReducer } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { FunctionComponent } from 'react'

import { setData } from './routes/Main/state'

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
export const setValid = createAction(`${title}/vaild`)
export const setInvalid = createAction(`${title}/invaild`)

const initialState = Status.pending

export default createReducer(initialState, {
  [setPending.type]: _ => Status.pending,
  [setValid.type]: _ => Status.valid,
  [setInvalid.type]: _ => Status.invalid,
})

export const mapStateToProps = ({ result }: Result) => ({ result })

export const wrapConnect = (View: FunctionComponent<never>) =>
  connect(
    mapStateToProps,
    { setPending, setValid, setInvalid }
  )(View)
