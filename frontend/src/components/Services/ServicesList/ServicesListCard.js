import React, { useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'

const ServicesListCard = (props) => {
  const [dropDown,setDropDown] = useState(true);

  return (
    <div className="rounded-lg md:rounded-xl w-3/4 md:w-2/3 py-4 md:py-5 my-6 md:my-8 mx-auto font-cataraman bg-reddishgray" style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
        <div className='flex justify-between items-center mx-8 md:mx-12 font-semibold'>
            <div>{props.header}</div>
            <div className='cursor-pointer p-2' onClick={()=>{setDropDown(!dropDown)}}>
              {dropDown
              ?
              <BsChevronDown/>
              :
              <BsChevronUp/>
              }
            </div>
        </div>
        {!dropDown && props.subHeader?
        <div className='mx-8 md:mx-12 text-sm mt-2 text-darkblue'>
          {props.subHeader.map((subheader) => {
            <Link to={subheader.url} className='my-2 md:my-3 flex items-center cursor-pointer'>
              <div className='mr-2 md:mr-3 capitalize'>{subheader.name}</div>
              <BsChevronRight/>
            </Link>
            })
          }
        
        </div>
        :
        ""}
    </div>
  )
}

export default ServicesListCard