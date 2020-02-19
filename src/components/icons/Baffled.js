import React from 'react'

export default ({ className = '', color = 'currentColor', width = 32, height = 32 }) => {
  return (
    <svg viewBox="0 0 32 32" className={`icon${className}`} width={width} height={height}>
      <title>baffled</title>
      <path fill={color} d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
      <path fill={color} d="M12 13c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
      <path fill={color} d="M11 10c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM11 8c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5v0z"></path>
      <path fill={color} d="M22 13c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
      <path fill={color} d="M21 10c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM21 8c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5v0z"></path>
      <path fill={color} d="M12 22h8v2h-8v-2z"></path>
    </svg>
  )
}
