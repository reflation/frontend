import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { setPending, setInvalid, Status, setValid } from '../../store/status'
import { setData } from '../../store/userInfo'

import View, { MainSkeleton } from './view'

import { loadData } from '../../api'

import { handleToken } from '../../utils'

const token = handleToken()

const selector = ({ result, userInfo }: RootState) => ({ result, userInfo })

export default function Main() {
  const dispatch = useDispatch()
  const { result, userInfo } = useSelector(selector)

  useEffect(() => {
    dispatch(setPending())

    loadData(token)
      .then(({ data }) => {
        dispatch(setData(data))
        dispatch(setValid())
      })
      .catch(() => {
        dispatch(setInvalid())
      })
  }, [dispatch])

  switch (result) {
    case Status.pending:
      return <MainSkeleton />
    case Status.invalid:
      return <Redirect to="/login" />
    case Status.valid:
      return <View data={userInfo} />
    default:
      return <div>알 수 없는 오류</div>
  }
}
