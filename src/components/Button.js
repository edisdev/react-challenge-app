import React from 'react'

export default (props) => {
  let attrs = {...props}
  delete attrs.children
  attrs.className = `btn ${attrs.className||''}`
  return (<button {...attrs}>{props.children}</button>)
}