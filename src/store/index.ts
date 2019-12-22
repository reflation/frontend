import { configureStore, combineReducers } from '@reduxjs/toolkit'
import resultReducer from './status'
import userInfoReducer from './userInfo'
import indexReducer from './semesterIndex'

const reducer = combineReducers({
  result: resultReducer,
  userInfo: userInfoReducer,
  semesterIndex: indexReducer,
})

export type RootState = ReturnType<typeof reducer>

export default configureStore({ reducer })
