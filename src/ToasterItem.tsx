import React from 'react'
import { ToastType } from './types'

const ToasterItem = ({message , type} : {message : string , type : ToastType}) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default ToasterItem
