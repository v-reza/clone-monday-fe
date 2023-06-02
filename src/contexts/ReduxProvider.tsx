"use client"
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux'

const ReduxProvider = (props: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default ReduxProvider