import React, { useEffect } from 'react'

import { IndexProps, wrapConnect } from '../../state'

import View from './view'

const Container = ({ status, setPending, ...actions }: IndexProps) => {
  useEffect(() => {
    setPending()
  }, [setPending])
  return <View status={status} actions={actions} />
}

export default wrapConnect(Container)
