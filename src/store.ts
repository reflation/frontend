import { configureStore, combineReducers } from '@reduxjs/toolkit'
import statusReducer from './state'

const reducer = combineReducers({
  result: statusReducer,
})

export default configureStore({ reducer })
