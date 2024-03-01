import React from 'react'

const CustomButton = ({title,classname}) => {
  return (
    <>
        <button className={`btn custom-btn my-1 ${classname}`}>{title}</button>
    </>
  )
}

export default CustomButton