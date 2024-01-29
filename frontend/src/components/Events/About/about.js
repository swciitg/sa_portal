import React from 'react'

const About = (props) => {
  return (
    <div className='pt-6 pb-2 md:pb-4 pl-[10%] pr-[15%] lg:pr-[35%]'>
        <div className='text-3xl leading-10 py-6 md:py-8  font-bold   text-[#231F20]'>
            Events
        </div>
        <div className='text-[18px] font-[400]  tracking-[0.6%] md:tracking-wide leading-[40px]'>
        {props.content}
        </div>
    </div>
  )
}

export default About;