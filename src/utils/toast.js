import React from 'react'
import { useToasts } from 'react-toast-notifications'

export default ({ message, appearance = 'success'}) => {
  const { addToast } = useToasts(null)
  addToast(message, appearance)
  return <></>
}