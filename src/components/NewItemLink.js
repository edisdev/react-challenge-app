import React from 'react'
import { Link } from 'react-router-dom'
import Plus from './icons/Plus'

export default () => {
  return (
    <div className="newItemLink">
      <div className="newItemLinkContent">
        <Link className="newItemLinkHref" to="/new-item">
          <Plus/>
        </Link>
        <h2 className="newItemLinkText">SUBMIT A LINK</h2>
      </div>
    </div>
  )
}