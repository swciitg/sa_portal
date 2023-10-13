import React, { useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'

const ServicesListCard = (props) => {
  const [dropDown,setDropDown] = useState(true);

  return (
    <div className="rounded-xl w-2/3 py-5 my-8 mx-auto bg-whitesmoke font-cataraman bg-reddishgray" style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
        <div className='flex justify-between items-center mx-12 font-semibold'>
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
        <div className='mx-12 text-sm mt-2 text-darkblue'>
          {props.subHeader.map((subheader) => {
            <Link to={subheader.url} className='my-3 flex items-center cursor-pointer'>
              <div className='mr-3'>{subheader.name}</div>
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