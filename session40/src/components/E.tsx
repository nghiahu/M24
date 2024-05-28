import React, { useContext } from 'react'
import { Context } from './UseContext'
export default function E() {
    let result = useContext(Context)
  return (
    <div>E {result}</div>
  )
}
