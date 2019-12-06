import React, { useEffect } from 'react'

import { IndexProps, wrapConnect } from '../../state'

import View from './view'

const Container = ({ result, setPending, ...actions }: IndexProps) => {
  useEffect(() => {
    setPending()
  }, [setPending])
  return <View result={result} actions={actions} />
}

export default wrapConnect(Container)
