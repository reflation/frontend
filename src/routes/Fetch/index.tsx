import React, { useEffect } from 'react'

import { IndexProps, wrapConnect } from '../../state'

import View from './view'

import { saveToken } from '../../utils'

const Container = ({ status, setPending, ...actions }: IndexProps) => {
  useEffect(() => {
    saveToken()
    setPending()
  }, [setPending])

  return <View status={status} actions={actions} />
}

export default wrapConnect(Container)
