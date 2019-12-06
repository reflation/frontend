import { createAction, createReducer } from '@reduxjs/toolkit'

export enum Status {
  'invalid',
  'valid',
  'pending',
}

interface Props {
  status: Status
}

export type IndexProps = Props & Actions
export type IndexOmitProps = Props & ActionsOmit

export interface ViewProps extends Props {
  actions: ActionsOmit
}

export type Actions = {
  setPending: typeof setPending
  setValid: typeof setValid
  setInvalid: typeof setInvalid
}

export type ActionsOmit = Omit<Actions, 'setPending'>

const title = 'common'

export const setPending = createAction(`${title}/pending`)
export const setValid = createAction(`${title}/vaild`)
export const setInvalid = createAction(`${title}/invaild`)

const initialState = Status['pending']

export default createReducer(initialState, {
  [setPending.type]: _ => Status['pending'],
  [setValid.type]: _ => Status['valid'],
  [setInvalid.type]: _ => Status['invalid'],
})

export const mapStateToProps = (state: Status) => ({ status: state })
