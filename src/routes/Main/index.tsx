import React, { useEffect } from 'react'

import { setPending, setInvalid } from '../../state'
import { setData } from './state'

import View from './view'

import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../../api'

import { RootState } from '../../store'

const selector = ({ result, data }: RootState) => ({ result, data })

export default () => {
  const dispatch = useDispatch()
  const { result, data } = useSelector(selector)
  const loading = async () => {
    const data = await fetching()
    data ? dispatch(setData(data)) : dispatch(setInvalid())
  }

  useEffect(() => {
    dispatch(setPending())
    loading()
    // eslint-disable-next-line
  }, [])

  return <View result={result} data={data} />
}

const fetching = async () => {
  try {
    return (await loadData()).data
  } catch (e) {
    return false
  }
}
