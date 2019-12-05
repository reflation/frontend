import { createAction, createReducer } from '@reduxjs/toolkit'

export enum Status {
  'invalid',
  'valid',
  'pending',
}

interface Props {
  status: Status
}

export type IndexOmitProps = Props & ActionsOmit

export interface ViewProps extends Props {
  actions: ActionsOmit
}

export type Actions = {
  pending: typeof pending
  valid: typeof valid
  invalid: typeof invalid
}

export type ActionsOmit = Omit<Actions, 'pending'>

const title = 'common'

export const pending = createAction(`${title}/pending`)
export const valid = createAction(`${title}/vaild`)
export const invalid = createAction(`${title}/invaild`)

const initialState = Status['pending']

export default createReducer(initialState, {
  [pending.type]: _ => Status['pending'],
  [valid.type]: _ => Status['valid'],
  [invalid.type]: _ => Status['invalid'],
})

export const mapStateToProps = (state: Status) => ({ status: state })
