import React from 'react'

export default ({ attrs, options = [] }) => {
  return (<div className="SelectBox">
    <select {...attrs}>
      {
        options.map((o,index) => {
          return (<option 
             key={index}
             value={o.value}>
             {o.label}
            </option>)
        })
      }
    </select>
    <div className="ArrowDown"></div>
  </div>)
}