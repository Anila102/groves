import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import CustomButton from './CustomButton';
import SocialIcons from './SocialIcons';
import LanguageDropdown from './LanguageDropdown';
import menu from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/close.svg'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='container-fluid container d-flex justify-content-between align-items-center text-light py-3'>
      <div>
        <Link to='/'>
          <img style={{ width: '150px' }} src={logo} alt='' />
        </Link>
      </div>
      <div className='d-flex align-items-center d-lg-none'>
        {/* <button className='bg-none' */}
       <img src={menu}  alt=''  onClick={toggleMenu} />
        {/* </button> */}

      </div>
      {/* Display social icons, login button, and language dropdown on large screens */}
      <div className='d-none d-lg-flex align-items-center'>
        <div className='mx-2'>
          <SocialIcons />
        </div>
        <div className='mx-2'>
          <CustomButton title="Login" />
        </div>
        <LanguageDropdown />
      </div>
      {/* Conditionally render menu on small screens */}
      {showMenu && (
        <>

          <div className='sidebar-menu '>

            <div className='sidebar-content'>
              <div className='logo-container my-3 mx-5'>
                <Link to='/'>
                  <img style={{ width: '150px' }} src={logo} alt='' />
                </Link>
               <img src={closeIcon} alt='' onClick={toggleMenu} />
              </div>

              <Link to='/' className='nav-item px-4 py-3  spacing'>DINE WITH US</Link>
              <Link to='/' className='nav-item px-4 py-3  spacing'>PLAN WITH US</Link>
              <Link to='/' className='nav-item px-4 py-3  spacing'>EVENTS</Link>
              <Link to='/' className='nav-item px-4 py-3  spacing'>VIEW GROVES MAP</Link>
              <Link to='/' className='nav-item px-4 py-3  spacing'>OUR STORY</Link>
              <Link to='/' className='nav-item px-4 py-3  spacing'>CONTACT US</Link>
            </div>
            <div className='px-3 my-3 mx-3'>
              <LanguageDropdown />
              <CustomButton title="Login" classname='my-3 ' />

            </div>

          </div>
        </>
      )}

    </div>
  );
};

export default Header;
