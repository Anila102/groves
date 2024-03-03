import React from 'react'
import MainSection from './modules/MainSection';
import VideoSection from './modules/VideoSection';
import AccessTicketSection from './modules/AccessTicketSection';
import BookTicketSection from './modules/BookTicketSection.js';
import CuisineSection from './modules/CuisineSection/index.js';
import ExperienceSection from './modules/ExperienceSection/index.js';
import MapSection from './modules/MapSection.js/index.js';
import Footer from '../../common/Footer.js';

const HomePage = () => {
  return (
    <>
     <MainSection />
     <div className='primary-bg'>
      <VideoSection />
      <AccessTicketSection />
      <BookTicketSection />
      <CuisineSection />
      <ExperienceSection />
      <MapSection />
      <Footer />
     </div>
    </>
  )
}

export default HomePage