import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  setPending,
  setValid,
  setInvalid,
  IndexProps,
  mapStateToProps,
} from '../../state'

import View from './view'

import { saveToken } from '../../utils'

const Container = ({ status, setPending, ...actions }: IndexProps) => {
  useEffect(() => {
    saveToken()
    setPending()
  }, [setPending])

  return <View status={status} actions={actions} />
}

export default connect(
  mapStateToProps,
  { setValid, setInvalid, setPending }
)(Container)
