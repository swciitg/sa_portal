import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import React from 'react'
import {BsChevronRight} from "react-icons/bs"
import styles from './BoardCard3.module.css'

const Boardcard = (props) => {
  const {details}=props;
    
  return (
        <div className='py-5 px-2'>
            <Wrapper>

                {/* left part starts */}
                <div className='relative lg:flex-[3]'>

                    {/* image */}
                    <img className='w-full lg:w-76 h-[200px] lg:h-[280px] object-cover grayscale rounded-t-2xl lg:rounded-tr-none lg:rounded-l-xl ' src={details.url} />

                    {/* name and role  */}
                    <div className='absolute bg-gradient-to-t from-black/80 to-gray/0 md:bg-black/[0.2] py-1 lg:py-2 px-3 lg:px-3 bottom-0 w-full flex flex-col leading-0 lg:rounded-bl-xl'>
                        <div className=' text-white text-lg md:text-md font-semibold text-start pl-4 md:pl-2'>
                            {details.name}
                        </div>
                        <div className=' text-white text-xs font-small text-start pl-4 md:pl-2 pb-1 '>
                            {details.role}
                        </div>
                    </div>
                </div>
                {/* left part ends */}

                {/* Right part starts */}
                <div className='bg-blue flex flex-col py-2 lg:py-3 px-6 md:px-4 lg:px-6 min-h-[200px] lg:h-[280px] w-92 px-auto relative lg:flex-[4] rounded-b-2xl lg:rounded-bl-none lg:rounded-r-xl'>

                    {/* board name */}
                    <div className='text-white pt-1 text-2xl md:text-lg lg:text-2xl font-semibold text-start'>
                        {details.board}
                    </div>

                    {/* about board */}
                    <div className='text-white text-xs pt-5 pr-2 pb-4 md:pb-2 lg:pt-4 w-2/3 lg:w-full'>
                    {details.aboutBoard}
                    {details.aboutBoard}
                    </div>
                    <div className={styles.hoverButton}>
                        <Link href='/' className='absolute text-md bottom-6 lg:bottom-6 right-5 lg:right-2/3 bg-white/[0.9] font-medium px-4 lg:px-6 py-1 flex justify-between items-center rounded-full'>
                            <BsChevronRight className={styles.bsChevronRight}/> 
                            <div>Link</div>
                        </Link>
                    </div>
                    
                    <div className='absolute right-6 md:right-4 lg:right-6 text-xs top-[-35px] lg:top-[73%] bg-white/[0.9] w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center rounded-full lg:rounded-none '>
                            Logo
                    </div>
                </div>
                {/* Right part ends */}

            </Wrapper>
        </div>
  )
}

export default Boardcard;