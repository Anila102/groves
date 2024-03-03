import React from 'react'
import Restraunts from './components/Restraunts'

const CuisineSection = () => {
  return (
    <>
    <div className='lg-container d-flex justify-content-center flex-wrap px-lg-5 py-3'>
      <h1 className='video-head my-1'> Experience the Finest Cuisine</h1>
      <div className='video-text px-5 d-lg-block d-none'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Simply dummy text of the printing and typesetting.
      </div>
    </div>
    <div className='container'>
      <Restraunts />
    </div>
    </>
  )
}

export default CuisineSection