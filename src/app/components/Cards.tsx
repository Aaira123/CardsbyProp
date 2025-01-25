
import React from 'react'
import Image from 'next/image';
import { log } from 'console';

const Cards = (props:any) => {
    log(props)
  return (

    <div className='border border-gray-900 bg-orange-300 mt-20 rounded-xl pl-12 pt-4'>
      
      <div>
        <Image src={props.image} alt='honda' width={190} height={100} />
      </div>
      <h3 className='text-black hover:text-red-800 ml-16 md:font-extrabold'>
        {props.name}
      </h3>
      <h3 className='text-black hover:text-red-800 ml-16'>
        ${props.price}
      </h3>
      <h3 className='text-black hover:text-red-800 ml-7 '>
        <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
        {props.reviews} reviews
      </h3>

    </div>
  )
}

export default Cards
