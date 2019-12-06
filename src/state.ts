import { createAction, createReducer } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { FunctionComponent } from 'react'

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

const setPending = createAction(`${title}/pending`)
const setValid = createAction(`${title}/vaild`)
const setInvalid = createAction(`${title}/invaild`)

const initialState = Status['pending']

export default createReducer(initialState, {
  [setPending.type]: _ => Status['pending'],
  [setValid.type]: _ => Status['valid'],
  [setInvalid.type]: _ => Status['invalid'],
})

export const mapStateToProps = (state: Status) => ({ status: state })

export const wrapConnect = (View: FunctionComponent<never>) =>
  connect(
    mapStateToProps,
    { setPending, setValid, setInvalid }
  )(View)
