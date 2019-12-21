import { configureStore, combineReducers } from '@reduxjs/toolkit'
import resultReducer from './status'
import userInfoReducer from './userInfo'

const reducer = combineReducers({
  result: resultReducer,
  userInfo: userInfoReducer,
})

export type RootState = ReturnType<typeof reducer>

export default configureStore({ reducer })
