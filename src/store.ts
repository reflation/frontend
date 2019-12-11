import { configureStore, combineReducers } from '@reduxjs/toolkit'
import statusReducer from './state'
import dataReducer from './routes/Main/state'

const reducer = combineReducers({
  result: statusReducer,
  data: dataReducer,
})

export default configureStore({ reducer })
