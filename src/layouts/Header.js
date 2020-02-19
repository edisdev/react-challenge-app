import React from 'react'
import { Link } from 'react-router-dom'
export default () => {
  return(
    <header className="Header">
      <div className="container">
        <div className="flex-left">
          <Link className="logo" to="/">challenge</Link>
        </div>
        <div className="flex-right">
          <span className="linkVote"><b>Link</b><span>VOTE</span> Challenge</span>
        </div>
      </div>
    </header>
  )
}