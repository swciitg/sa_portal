import React from 'react'

const About = (props) => {
  return (
    <div className='pt-6 pb-2 md:pb-4 pl-[10%] pr-[15%] lg:pr-[35%]'>
        <div className='text-3xl  py-6 md:py-8 font-bold text-[#231F20]'>
            Events
        </div>
        <div className=' text-[16px] font-[400]  tracking-[0.6%] md:tracking-wide leading-7'>
        {props?.content}
        </div>
    </div>
  )
}

export default About;