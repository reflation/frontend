import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  setPending,
  setValid,
  setInvalid,
  IndexProps,
  Actions,
  Result,
} from '../../state'
import { setData } from './state'

import { loadContent } from '../../control'
import { UserOmitMailid } from '../../types/models'

import View from './view'

const load = async ({
  setValid,
  setData,
  setInvalid,
}: Omit<Actions, 'setPending'>) => {
  try {
    const { data } = await loadContent()
    setValid()
    // @ts-ignore: TS2722
    setData(data)
  } catch (e) {
    setInvalid()
  }
}

type Props = IndexProps & { data?: { type: string; payload: UserOmitMailid } }

const Container = ({ result, data, setPending, ...actions }: Props) => {
  useEffect(() => {
    setPending()
    load(actions)
    // eslint-disable-next-line
  }, [setPending])

  return <View result={result} data={data ? data.payload : null} />
}

const mapStateToProps = ({
  result,
  data,
}: Result & {
  data: UserOmitMailid
}) => ({ result, data })

export default connect(
  mapStateToProps,
  { setPending, setValid, setInvalid, setData }
)(Container)
