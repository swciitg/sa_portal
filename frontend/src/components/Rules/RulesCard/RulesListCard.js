import Link from 'next/link';
import React, { useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'

const RulesListCard = (props) => {
  const [dropDown,setDropDown] = useState(true);

  return (
    <Link href={`https://intranet.iitg.ac.in/sa/api/rules/`+ `${props.link}`} className="w-full rounded-lg md:rounded-xl shadow-lg py-0 my-2 font-Manrope flex" style={{"box-shadow" : "rgba(0, 0, 0, 0.25)"}}>
      <div className='w-24 md:w-28 flex justify-center items-center border-r-2 py-auto' style={{"border-color" : "#D9D9D9"}}>{props.num}</div>
      <div className='w-full h-full flex justify-between items-center mx-8 md:mx-10 py-5'>
        <div className='font-medium text-sm capitalize'>{props.header}</div>  
        <div className='bg-reddishgray px-4 md:px-6 py-1 rounded-full font-medium text-[16px]' style={{"box-shadow" : "rgba(0, 0, 0, 0.12) 0px 2px 4px;"}}>PDF</div>  
      </div>
    </Link>
  )
}

export default RulesListCard