import React from 'react'
import arrow from '../../../../assets/images/arrow.png'

const AccessTicketSection = () => {
    return (
        <div className='mx-5 px-5 py-3 d-flex justify-content-center'>
            <div className='access-ticket-card '>
                <div className='d-flex justify-content-between px-5 py-5 align-items-center hover-container'>
                    <div className='text-white pe-5 me-5'>
                        <div className='my-2 mb-3'>25 SR/GUEST</div>
                        <h3>Get Your General Access Ticket</h3>
                        <div>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                            enim ut labore et</div>
                    </div>
                    <div><img src={arrow} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default AccessTicketSection