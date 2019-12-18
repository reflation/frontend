import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'

import { setPending, setInvalid, Status, setValid } from '../../store/status'
import { setData } from '../../store/userInfo'

import View, { MainSkleton } from './view'

import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../../api'

import { RootState } from '../../store'

const selector = ({ result, userInfo: data }: RootState) => ({ result, data })

export default () => {
  const dispatch = useDispatch()
  const { result, data } = useSelector(selector)
  const loading = async () => {
    const fetched = await fetching()
    if (fetched) {
      dispatch(setData(fetched))
      dispatch(setValid())
    } else dispatch(setInvalid())
  }

  useEffect(() => {
    dispatch(setPending())
    loading()
    // eslint-disable-next-line
  }, [])

  switch (result) {
    case Status.pending:
      return <MainSkleton />
    case Status.invalid:
      return <Redirect to="/login" />
    case Status.valid:
      return <View data={data} />
    default:
      return <div>알 수 없는 오류</div>
  }
}

const fetching = async () => {
  try {
    return (await loadData()).data
  } catch (e) {
    return false
  }
}
