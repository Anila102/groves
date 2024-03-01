import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomButton from './CustomButton';
import SocialIcons from './SocialIcons';

const Header = () => {
  return (
    <div className='container-fluid container d-flex justify-content-between align-items-center text-light py-3'>
      <div>
        <Link to='/'>
          <img style={{ width: '150px' }} src={logo} alt='' />
        </Link>
      </div>
      <div className='d-flex align-items-center'>
        <div className='mx-2'>
          <SocialIcons />
        </div>
        <div className='mx-2'>
          <CustomButton title="Login" />
        </div>
        <Dropdown className='mx-2'>
          <Dropdown.Toggle className='btn btn-light border-0' variant='dark' id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
