import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setPending, setInvalid, Status, setValid } from '../../store/status'
import { setData } from '../../store/userInfo'

import View, { MainSkleton } from './view'

import { loadData } from '../../api'

const selector = ({ result, userInfo }: RootState) => ({ result, userInfo })

export default function Main() {
  const dispatch = useDispatch()
  const { result, userInfo } = useSelector(selector)

  const fetching = async () => {
    try {
      const { data } = await loadData()
      dispatch(setData(data))
    } catch {
      dispatch(setInvalid())
    }
  }

  useEffect(() => {
    dispatch(setPending())
    if (!userInfo) {
      fetching()
    } else {
      dispatch(setValid())
    }
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
