import React from 'react'
import insta from '../assets/images/insta.svg'
import tiktok from '../assets/images/tiktok.svg'
import snapchat from '../assets/images/snapchat.svg'
import x from '../assets/images/x.svg'

const SocialIcons = () => {
  return (
    <div className='d-flex'>
    <div className='mx-2'> <img src={tiktok} className='w-75' alt="" /></div>
    <div className='mx-2'> <img src={insta} className='w-75' alt="" /></div>
    <div className='mx-2'> <img src={x} className='w-75' alt="" /></div>
    <div className='mx-2'> <img src={snapchat} className='w-75' alt="" /></div>

    </div>
  )
}

export default SocialIcons