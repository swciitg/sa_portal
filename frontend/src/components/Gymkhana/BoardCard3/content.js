import React from 'react'

const content = (props) => {
  return (
    <div className='pt-6 pb-2 md:pb-12 pl-[10%] pr-[10%] md:pr-[20%]'>
        <div className='text-2xl py-6 md:py-8 font-Manrope font-semibold'>
            Gymkhana
        </div>
        <div className='text-[18px] font-[400] font-Manrope tracking-[0.6%] md:tracking-wide leading-[40px]'>
        {props.content}
        </div>
    </div>
  )
}

export default content