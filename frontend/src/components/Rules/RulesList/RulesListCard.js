import React, { useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'

const RulesListCard = (props) => {
  const [dropDown,setDropDown] = useState(true);

  return (
    <div className="w-3/4 md:w-2/3 rounded-lg md:rounded-xl shadow-lg py-0 my-6 md:my-8 mx-auto font-Manrope flex" style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
      <div className='w-24 md:w-28 flex justify-center items-center border-r-2 py-auto' style={{"border-color" : "#D9D9D9"}}>{props.num}</div>
      <div className='w-full h-full flex justify-between items-center mx-8 md:mx-10 py-5'>
        <div className='font-medium text-sm md:text-lg capitalize'>{props.header}</div>  
        <div className='bg-reddishgray px-4 md:px-6 py-1 rounded-full font-medium text-[16px]' style={{"box-shadow" : "rgba(0, 0, 0, 0.12) 0px 2px 4px;"}}>PDF</div>  
      </div>
    </div>
  )
}

export default RulesListCard