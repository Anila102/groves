import React from 'react';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  return (
    <div className='subheader-border'>
      <div className='container-fluid container d-flex justify-content-between align-items-center py-3'>
        <Link className='nav-items uppercase-text spacing2'>DINE WITH US</Link>
        <Link className='nav-items uppercase-text spacing2'>PLAN WITH US</Link>
        <Link className='nav-items uppercase-text spacing2'>EVENTS</Link>
        <Link className='nav-items uppercase-text spacing2'>VIEW GROVES MAP</Link>
        <Link className='nav-items uppercase-text spacing2'>OUR STORY</Link>
        <Link className='nav-items uppercase-text spacing2'>CONTACT US</Link>
      </div>
    </div>
  );
};

export default SubHeader;
