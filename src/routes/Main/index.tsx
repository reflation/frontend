import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'

import { setPending, setInvalid, Status, setValid } from '../../store/status'
import { setData } from '../../store/userInfo'

import View, { MainSkleton } from './view'

import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../../api'

import { RootState } from '../../store'

const selector = ({ result, userInfo }: RootState) => ({ result, userInfo })

export default () => {
  const dispatch = useDispatch()
  const { result, userInfo } = useSelector(selector)
  const loading = async () => {
    const fetched = await fetching()
    if (fetched) dispatch(setData(fetched))
    else dispatch(setInvalid())
  }

  useEffect(() => {
    dispatch(setPending())
    if (!userInfo) loading()
    else dispatch(setValid())
    // eslint-disable-next-line
  }, [userInfo])

  switch (result) {
    case Status.pending:
      return <MainSkleton />
    case Status.invalid:
      return <Redirect to="/login" />
    case Status.valid:
      return <View data={userInfo} />
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
