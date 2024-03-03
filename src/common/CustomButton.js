import React from 'react';
import arrow from '../assets/images/arrow.png'

const CustomButton = ({ title, classname, isArrow }) => {
  return (
    <>
      <button className={`btn custom-btn ${isArrow && 'd-flex justify-content-between align-items-center ps-lg-3'} ${classname}`}>
        {isArrow ? (
          <>
            <span>{title}</span>
            <div style={{ marginLeft: '5px' }}><img src={arrow} className='w-50' alt='' /></div>
          </>
        ) : (
          title
        )}
      </button>
    </>
  );
};

export default CustomButton;
