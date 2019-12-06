import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  setPending,
  setValid,
  setInvalid,
  mapStateToProps,
  IndexProps,
} from '../../state'

import View from './view'

const Container = ({ status, setPending, ...actions }: IndexProps) => {
  useEffect(() => {
    setPending()
  }, [setPending])
  return <View status={status} actions={actions} />
}

export default connect(
  mapStateToProps,
  { setValid, setInvalid, setPending }
)(Container)
