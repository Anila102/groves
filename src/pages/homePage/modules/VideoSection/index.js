import React from 'react'

const VideoSection = () => {
  return (
    <div className='container d-flex justify-content-center flex-wrap px-5 py-3'>
        <h2 className='video-head my-1'> Mall Of: Endless Possibilities</h2>
        <div className='video-text px-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </div>
        <div className='video-container my-5'>
        <iframe
          className='video-frame'
          width='907'
          height='502'
          src='https://youtube.com/embed/fXAUnwKbE4o?si=dwX8sRdfujeaOQ1l'
          title='YouTube Video'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoSection