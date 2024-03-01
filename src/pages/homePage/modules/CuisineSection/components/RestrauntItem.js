import React from 'react'
import arrow from '../../../../../assets/images/arrow.png'

const RestrauntItem = ({title,image}) => {
    return (
        <>
            <div className='card p-lg-3 p-2 mx-3 my-lg-4 my-2'>
                <img src={image} alt='' />
                <div className='mb-3 d-flex align-items-center justify-content-between'>
                    <div className='my-lg-3 mx-lg-4 mx-2 text-white'>
                        <h3 className='my-2'>{title}</h3>
                        <div className='px-lg-4 px-3 mt-3 py-1 bgcolor-brown'>100 SR PER GUEST</div>
                    </div>
                    <div className='mx-lg-3 arrow-small'><img src={arrow} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default RestrauntItem