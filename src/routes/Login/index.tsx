import React from 'react'
import { connect } from 'react-redux'

import {
  setValid,
  setInvalid,
  mapStateToProps,
  IndexOmitProps,
} from '../../state'

import View from './view'

const Container = ({ status, ...actions }: IndexOmitProps) => (
  <View status={status} actions={actions} />
)

export default connect(
  mapStateToProps,
  { setValid, setInvalid }
)(Container)
