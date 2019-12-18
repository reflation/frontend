import React, { useEffect } from 'react'

import View from './view'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setPending } from '../../store/status'

const selector = ({ result }: RootState) => ({ result })

export default () => {
  const { result } = useSelector(selector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPending())
  }, [dispatch])
  return <View result={result} />
}
