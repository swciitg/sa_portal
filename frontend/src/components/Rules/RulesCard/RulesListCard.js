import Link from 'next/link';
import React, { useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'

const RulesListCard = (props) => {
  const [dropDown,setDropDown] = useState(true);

  return (
    <Link href={`https://intranet.iitg.ac.in/sa/api/rules/`+ `${props.link}`} className="w-full rounded-lg md:rounded-xl shadow-lg py-0 my-2 font-Manrope flex" style={{"box-shadow" : "rgba(0, 0, 0, 0.25)"}}>
      <div className='w-24 md:w-28 flex justify-center items-center border-r-2 py-auto text-xs sm:text-base font-medium' style={{"border-color" : "#D9D9D9"}}>{props.num}</div>
      <div className='w-full h-full flex justify-between items-center mx-8 md:mx-10 py-5'>
        <div className=' text-xs sm:text-base  font-medium'>{props.header}</div>  
        <div className="bg-[#efefef] rounded-xl text-xs sm:text-base p-2 px-4 sm:px-6 py-2">
            PDF
          </div>
      </div>
    </Link>
  )
}

export default RulesListCard