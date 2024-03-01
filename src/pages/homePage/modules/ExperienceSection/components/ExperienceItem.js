import React from 'react'
import box2 from '../../../../../assets/images/box2.png'
import exp from '../../../../../assets/images/exp.png'
import event from '../../../../../assets/images/event (2).png'

const ExperienceItem = () => {
    return (
        <div className='d-flex align-items-center my-3'>
            <div className='box box-2 mx-4'>
                <img src={box2} alt='' />
                <h3 className='text-center text-white px-2 my-4'>Restraunts</h3>

            </div>
            <div className='box box-1 mx-4'>
                <img src={exp} alt='' />
                <h3 className='text-center text-white px-2 my-4'>Experiences</h3>

            </div>
            <div className='box box-2 mx-4'>
                <img src={event} alt='' />
                <h3 className='text-center text-white px-2 my-4'>Events</h3>

            </div>
        </div>
    )
}

export default ExperienceItem