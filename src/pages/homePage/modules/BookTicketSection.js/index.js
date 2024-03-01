import React from 'react'
import CustomButton from '../../../../common/CustomButton'
import Places from './components/Places'

const BookTicketSection = () => {
  return (
    <div>
    <div className='container mt-5'>
    <div className='row col-lg-8 text-light py-2 mt-3'>
      <h1>Book General Access Ticket and <br />enjoy the attractions for free</h1>
      <CustomButton title="Book general Access Ticket" classname="w--lg-50 w-100 my-4" />
    </div>
    </div>
    <Places />
    </div>
  )
}

export default BookTicketSection