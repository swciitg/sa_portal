import React from 'react';

export default function SACard({id,title,url}) {
   
  return (
    <>
  <div style={{backgroundImage: `url(${url})`}} className="w-full sm:w-[88%] lg:w-[70%] h-64 flex items-end mx-auto sm:ml-2 mt-2 mb-6  bg-no-repeat bg-cover rounded-xl">
  <div className="px-2 sm:px-4 py-2 sm:py-4 text-white rounded-b-xl  tracking-wider text-lg sm:text-xl font-medium  bg-[#252525B2] w-full flex backdrop-blur-sm">
           <div className="pl-3 sm:pl-6 pr-6 sm:pr-10 border-r-2 border-gray">{id}</div>
            <div className=" pl-4 sm:pl-8">{title}</div>
  </div>
</div>
    </>
  )
}
