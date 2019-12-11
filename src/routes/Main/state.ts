import { createAction, createReducer } from '@reduxjs/toolkit'

import { UserOmitMailid } from '../../types/models'

type Action = UserOmitMailid | {}

const title = 'main'

export const setData = createAction<Action>(`${title}/setData`)

export type Data = typeof setData

const initialState: Action = {}

export default createReducer(initialState, {
  [setData.type]: (state, data: Action) => data,
})
