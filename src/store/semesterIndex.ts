import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

const title = 'main'

export const setSemesterIndex = createAction<number>(
  `${title}/setSemesterIndex`
)

const initialState = 0

export default createReducer(initialState, {
  [setSemesterIndex.type]: (state, action: PayloadAction<number>) =>
    action.payload,
})
