import React from 'react'

import Success from './icons/Smile';
import Baffled from './icons/Baffled';
import Crying from './icons/Crying';
import Wink from './icons/Wink';


const Toast = ({ appearance, children }) => {
  let notifyClass = `notify ${appearance}`
  let Icon = (attrs) =>  {
    switch (appearance) {
      case 'success':
        return <Success {...attrs}/>
      case 'warning': 
        return <Baffled {...attrs}/>
      case 'info':
        return <Wink {...attrs}/>
      case 'error':
        return <Crying {...attrs}/>
      default:
        return <></>
    }
  }
  return(
    <div className={notifyClass}>
      <div className="notifyIcon">
        <Icon/>
      </div>
      <div className="notifyContent">
        {children}
      </div>
    </div>
  )
}

export default Toast; 