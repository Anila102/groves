import React from 'react'
import Map from '../../../../assets/images/map.png'
import CustomButton from '../../../../common/CustomButton'

const MapSection = () => {
    return (
        <div className='container '>
            <div className='row '>
                <div className='col-lg-6 map'>
                    <img src={Map} alt='' />
                </div>
                <div className='col-lg-6 p-5  text-white d-flex flex-column justify-content-center  flex-wrap'>
                    <div className='align-items-center'>
                        <div className=''>
                            EXPERIENCE THE GROVES</div>
                        <h1 className='my-4'>Find your place</h1>
                        <div>Our interactive map will show you the way to the shops and restraunts that you want to see.</div>
                        <CustomButton title='Open the Map' classname='w-50 px-2 py-1 my-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapSection