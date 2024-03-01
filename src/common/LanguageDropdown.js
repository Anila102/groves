import React from 'react'
import { Dropdown } from 'react-bootstrap'

const LanguageDropdown = () => {
  return (
    <Dropdown className='mx-3'>
          <Dropdown.Toggle className='btn btn-light border-0' variant='dark' id="dropdown-basic">
            English
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>German</Dropdown.Item>
            <Dropdown.Item>French</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  )
}

export default LanguageDropdown