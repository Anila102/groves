import React from 'react'
import googlePlay from '../assets/images/googleplay.svg'
import appStore from '../assets/images/appstore.svg'

const DownloadApp = () => {
  return (
    <div className='d-flex flex-column'>
<div className='uppercase-text mx-2 my-2 spacing'>Download the groves app </div>
    <div>
        <img src={appStore} className='my-lg-3 my-2 mx-lg-2 mx-2' alt='' />
        <img src={googlePlay} className='my-lg-3 my-2 mx-lg-2 mx-2' alt='' />
    </div>
    </div>
  )
}

export default DownloadApp