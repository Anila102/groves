import React from 'react'
import DownloadApp from './DownloadApp'
import SocialIcons from './SocialIcons'
import logo from '../assets/images/logo.png'
import PaymentIcons from './PaymentIcons'

const Footer = () => {
    return (
        <div className='partition container'>
            <div className='container my-5'>
                <div className='d-flex justify-content-between text-white'>
                    <h1>Join us for an <br /> unforgettable experience</h1>
                    <DownloadApp />
                </div>
                <footer className="footer my-5 text-white">
                    <div className="">
                        <div className="row">
                            <div className="col-md-4">
                                <div className='spacing2  my-3 text-uppercase'>Location</div>
                                <p>Al-Hizam Park</p>
                                <p>Al-Semairi, Yanbu Al Bahr 46455</p>
                                <p>Riyadh Saudi Araboia</p>
                            </div>
                            <div className="col-md-4">
                                <div className='spacing2  my-3 text-uppercase'>Working Hours</div>
                                <div className='mb-4'>
                                    <p>Sun until Thurs: 4:00PM</p>
                                    <p>Fri & Sat: 2:30PM</p>
                                </div>
                                <div className='mt-4'>
                                    <p>Gates Close at:</p>
                                    <p>Sat until Wed: 12:00AM</p>
                                    <p>Thu & Fri: 12:30AM</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='spacing2  my-3 text-uppercase'>Guest Service Call</div>
                                <div className='mb-4'>
                                    <p>cc@thegroves-sa.com</p>
                                    <p>920001672</p>
                                </div>
                                <div className='mt-4'>
                                    <p>+9665566131309</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className='d-flex justify-content-between my-2'>
                    <img style={{ width: '150px' }} src={logo} alt='' />
                    <SocialIcons />
                </div>
                <div className=' bottom-bar d-flex justify-content-between my-4 text-white'>
                    <div >
                        <span className='me-5'>Terms & Conditions</span>
                        <span className='me-5'>Privacy Policy</span>
                        <span className='me-5'>&#169; 2023 The Groves for Entertainment</span>
                    </div>
                    <PaymentIcons />
                </div>
            </div>
            <div className=''>w</div>
        </div>
    )
}

export default Footer