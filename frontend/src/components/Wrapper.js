import React from 'react'

const Wrapper = ({children,className}) => {
  return (
    <div className={`w-full flex flex-col lg:flex-row mx-auto ${className || ""}`}>{children}</div>
  )
}

export default Wrapper