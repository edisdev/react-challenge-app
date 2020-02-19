import React from 'react'

import ArrowLeft from '../components/icons/ArrowLeft'
import { Link } from 'react-router-dom'
import NewItemForm from '../components/NewItemForm';

export default () => {
  return (<div className="newLinkPage">
    <Link className="ReturnButton" to="/">
      <ArrowLeft/>
      <span className="m-left-10">Return To List</span>
    </Link>
    <h2 className="title">Add New Link</h2>
    <NewItemForm/>
  </div>)
}