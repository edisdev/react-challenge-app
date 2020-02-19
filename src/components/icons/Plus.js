import React from 'react'

export default ({ className = '', color = 'currentColor', width = 32, height = 32 }) => {
  return (
    <svg className={`icon${className}`} id="icon-plus" viewBox="0 0 32 32" width={width} height={height}>
      <title>plus</title>
      <path
        fill={color}
        d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z">
      </path>
    </svg>
  )
}