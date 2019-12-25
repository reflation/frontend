import React, { useEffect } from 'react'

import View from './view'
import { useDispatch, useSelector } from 'react-redux'
import { selector, setPending } from '../../store/status'
import { getToken } from '../../utils'
import { Redirect } from 'react-router-dom'

export default () => {
  const { result } = useSelector(selector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPending())
  }, [dispatch])
  return getToken() ? <Redirect to="main" /> : <View result={result} />
}
