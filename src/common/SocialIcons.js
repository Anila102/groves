import React from 'react'
import insta from '../assets/images/insta.svg'
import tiktok from '../assets/images/tiktok.svg'
import snapchat from '../assets/images/snapchat.svg'
import x from '../assets/images/x.svg'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <div className='d-flex'>
      <div className='mx-2'><Link className='cursor-pointer ' to="https://www.tiktok.com/" target="_blank" rel="noreferrer"> <img src={tiktok} className='w-75' alt="" /></Link></div>
      <div className='mx-2'> <Link className='cursor-pointer ' to="/https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={insta} className='w-75' alt="" /></Link></div>
      <div className='mx-2'> <Link className='cursor-pointer ' to="/https://www.twitter.com/" target="_blank" rel="noreferrer"><img src={x} className='w-75' alt="" /></Link></div>
      <div className='mx-2'> <Link className='cursor-pointer ' to="/https://www.snapchat.com/" target="_blank" rel="noreferrer"><img src={snapchat} className='w-75' alt="" /></Link></div>

    </div>
  )
}

export default SocialIcons