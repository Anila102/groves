import React from 'react'
import box1 from '../../../../../assets/images/box1.png'
import box2 from '../../../../../assets/images/box2.png'
import box3 from '../../../../../assets/images/box3.png'
import box4 from '../../../../../assets/images/box4.png'

const Places = () => {
  return (
    <div className='container-left d-flex align-items-center my-4'>
      <div className='box box-1 me-5'>
        <img src={box1} alt='' /> 
        <h3 className='text-center text-white px-2 my-4'>Little Krazy</h3>
      </div>
      <div className='box box-2 mx-2'>
        <img src={box2} alt='' /> 
        <h3 className='text-center text-white px-2 my-4'>Hawanim Groves City</h3>

      </div>
      <div className='box box-3 mx-2 mb-5'>
        <img src={box3} alt='' /> 
        <h3 className='text-center text-white px-2 my-4'>Picnic Market</h3>

      </div>
      <div className='box box-4 mx-2'>
        <img src={box4} alt='' /> 
        <h3 className='text-center text-white px-2 my-4'>Lucawest</h3>

      </div>
      
    </div>
  )
}

export default Places