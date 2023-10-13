import React, { useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'

const RulesListCard = (props) => {
  const [dropDown,setDropDown] = useState(true);

  return (
    <div className="w-2/3 rounded-lg shadow-lg py-0 my-8 mx-auto font-raleway flex" style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
      <div className='w-28 flex justify-center items-center border-r-2 py-auto' style={{"border-color" : "#D9D9D9"}}>{props.key}</div>
      <div className='w-full h-full flex justify-between items-center mx-10 py-5'>
        <div className='font-medium'>{props.header}</div>  
        <div className='bg-reddishgray px-6 py-1 rounded-full font-light' style={{"box-shadow" : "rgba(0, 0, 0, 0.08) 0px 2px 4px;"}}>PDF</div>  
      </div>
    </div>
  )
}

export default RulesListCard