import React from 'react'
import arrow from '../../../../../assets/images/arrow.png'

const RestrauntItem = ({title,image}) => {
    return (
        <>
            <div className='card p-3 mx-3 my-4'>
                <img src={image} alt='' />
                <div className='mb-3 d-flex align-items-center justify-content-between'>
                    <div className='my-3 mx-4 text-white'>
                        <h3 className='my-2'>{title}</h3>
                        <div className='px-4 mt-3 py-1 bgcolor-brown'>100 SR PER GUEST</div>
                    </div>
                    <div className='mx-3'><img src={arrow} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default RestrauntItem