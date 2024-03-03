import React from 'react'
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.svg'
import mask from '../assets/images/mask.png'

const PaymentIcons = () => {
  return (
    <div className='d-flex justify-content-between'>
   <img src={visa} className='w-25' alt="" />
    <img src={mastercard} className='w-25' alt="" />
    <img src={mask} className='w-25' alt="" />

    </div>
  )
}

export default PaymentIcons