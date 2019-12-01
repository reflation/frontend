import React from 'react'
import { connect } from 'react-redux'

import {
  valid,
  invalid,
  StatusParam,
  mapStateToProps,
  ActionsOmit,
} from '../../state'

import View from './view'

const Container = ({ status, ...actions }: ActionsOmit & StatusParam) => (
  <View status={status} actions={actions} />
)

export default connect(
  mapStateToProps,
  { valid, invalid }
)(Container)
