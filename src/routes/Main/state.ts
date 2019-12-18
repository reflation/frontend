import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../types/models'

const title = 'main'

export const setData = createAction<User>(`${title}/setData`)

// @ts-ignore
const initialState: User = null

export default createReducer(initialState, {
  [setData.type]: (state, action: PayloadAction<User>) => action.payload,
})
