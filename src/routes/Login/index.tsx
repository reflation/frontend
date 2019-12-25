import React, { useEffect } from 'react'

import View from './view'
import { useDispatch, useSelector } from 'react-redux'
import { selector, setPending } from '../../store/status'
import { ifHasTokenRedirect } from '../../utils'

export default () => {
  ifHasTokenRedirect()

  const { result } = useSelector(selector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPending())
  }, [dispatch])
  return <View result={result} />
}
