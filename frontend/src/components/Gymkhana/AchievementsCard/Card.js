import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import Link from 'next/link'


const Card = (props) => {
    const {details2}=props;

  return (
    <div className='mx-auto text-center rounded-2xl shadow-3xl p-6 md:p-7 mb-10 w-80 md:w-1/3 lg:w-1/4'>

        {/* image if there */}
        {details2.url?<img className='h-32 md:h-36 w-full mb-5 object-cover rounded-2xl' src={details2.url} 
        />:""}

        {/* main title */}
        <div className='mb-2 md:mb-3'>
            <div className='text-start text-md font-raleway tracking-wide font-semibold leading-tight text-darkblue'>
                {details2.heading}
            </div>
        </div>

        {/* detail of card */}
        <div>
            <div className='text-start text-xs md:text-sm text-greyblue font-catamaran'>
                {details2.paragraph}
            </div>
        </div>

        {/* read more link */}
        <Link href='/' className='flex justify-end items-center gap-2 pt-2'>
            <div className='font-mono text-sm text-darkblue font-medium pb-0.5'>
                Read more
            </div>

            <div>
                <BsFillArrowRightSquareFill className='text-darkblue '/>
            </div>
        </Link>
    </div>
  )
}

export default Card;