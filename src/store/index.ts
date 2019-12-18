import { configureStore, combineReducers } from '@reduxjs/toolkit'
import statusReducer from './status'
import dataReducer from './userInfo'

const reducer = combineReducers({
  result: statusReducer,
  userInfo: dataReducer,
})

export type RootState = ReturnType<typeof reducer>

export default configureStore({ reducer })
