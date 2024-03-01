import React from 'react'

const CustomButton = ({title,classname}) => {
  return (
    <>
        <button className={`btn custom-btn  ${classname}`}>{title}</button>
    </>
  )
}

export default CustomButton