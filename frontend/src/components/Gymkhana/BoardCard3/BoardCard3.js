import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import React from 'react'
import {BsChevronRight} from "react-icons/bs"
import styles from './BoardCard3.module.css'
import Image from 'next/image'

const Boardcard = (props) => {
  return (
        <div className='py-5 px-2'>
            <Wrapper>

                {/* left part starts */}
                <div className='relative lg:flex-[3]'>

                    {/* image */}
                    <img className='w-full lg:w-76 h-[200px] lg:h-[420px] object-fit rounded-t-2xl lg:rounded-tr-none lg:rounded-l-xl' src={props.url} alt='User Profile'/>

                    {/* name and role  */}
                    <div className='absolute md:bg-black/[0.3] py-1 lg:py-2 px-4 lg:px-6 bottom-0 w-full flex flex-col leading-0 lg:rounded-bl-xl'>
                        <div className=' text-white font-Manrope text-[19px] md:text-[22px] md:text-md font-[500] text-start pl-2'>
                            {props.name}
                        </div>
                        <div className=' text-white font-raleway text-[11px] md:text-[13px] font-small text-start pl-2 pb-1 uppercase'>
                            {props.role}
                        </div>
                    </div>
                </div>
                {/* left part ends */}

                {/* Right part starts */}
                <div className='bg-blue flex flex-col pt-2 pb-10 md:pb-2 px-6 md:px-4 lg:px-6 md:min-h-[420px] w-92 px-auto relative lg:flex-[4] rounded-b-2xl lg:rounded-bl-none lg:rounded-r-xl font-Manrope'>

                    {/* board name */}
                    <div className='text-white pt-4 pb-2 text-[32px] leading-9 md:text-[45px] font-semibold text-start'>
                        {props.board}
                    </div>

                    {/* about board */}
                    <div className='text-white text-[14px] md:text-[16px] pt-5 pr-0 md:pr-2 pb-2 lg:pt-4 w-full md:w-2/3 lg:w-full'>
                        {props.aboutBoard}
                    </div>
                    <div className={styles.hoverButton}>
                        <Link href={props.link} className='absolute right-6 md:right-auto text-md bottom-4 lg:bottom-6 bg-white/[0.9] font-medium px-2 lg:px-5 py-1 flex justify-end md:justify-between items-center rounded-xl'>
                            <div className='text-sm md:text-lg px-1 font-Manrope'>Link</div>
                            <div className='text-sm md:text-lg'>
                                <BsChevronRight className={styles.bsChevronRight}/> 
                            </div>
                        </Link>
                    </div>
                    
                    <img src={props.logo} className='absolute right-3 md:right-6 text-xs top-[-35px] md:top-[83%] bg-white/[0.4] w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center rounded-full'/>
                </div>
                {/* Right part ends */}

            </Wrapper>
        </div>
  )
}

export default Boardcard;