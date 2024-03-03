import React from 'react'
import CustomButton from '../../../../common/CustomButton'
import ExperienceItem from './components/ExperienceItem'

const ExperienceSection = () => {
    return (
        <div className='container-left '>
            <div className='row '>
                <div className='col-lg-3 d-flex justify-content-lg-center justify-content-start align-items-lg-center align-items-start px-4 flex-column text-white text-lg-center text-start'>
                    <h1 className='text-lg-center text-start mylg-3 my-1'>Curate your <br />experience<br /> as you like</h1>
                    <CustomButton classname='w-100 py-2 my-4' isArrow={true} title='Book General Access Ticket' />
                </div>
                <div className='col-lg-9'>
                <ExperienceItem />
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection