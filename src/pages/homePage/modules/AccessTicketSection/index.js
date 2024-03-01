import React from 'react'
import arrow from '../../../../assets/images/arrow.png'

const AccessTicketSection = () => {
    return (
        <div className='mx-lg-5 mx-2 px-lg-5 px-2 py-3 d-flex justify-content-center'>
            <div className='access-ticket-card '>
                <div className='d-flex justify-content-between px-lg-5 py-lg-5 p-3 align-items-center hover-container flex-wrap flex-lg-nowrap'>
                    <div className='text-white pe-lg-5 me-lg-5'>
                        <div className='my-2 mb-3'>25 SR/GUEST</div>
                        <h3>Get Your General Access Ticket</h3>
                        <div>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                            enim ut labore et</div>
                    </div>
                    <div className='d-flex justify-content-end my-3 my-lg-0 w-100'><img src={arrow} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default AccessTicketSection