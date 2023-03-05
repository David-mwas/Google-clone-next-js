import React from 'react'
function Avatar({className}) {
  return (
    <img
      loading='lazy'
      className={`h-11 w-11 rounded-full object-cover p-2  object-top ${className}`}
      src='/../mwas.jpg'
      alt='profile pic'
    />
  )
}

export default Avatar
