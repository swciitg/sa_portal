import React from 'react'
import Teams from '../../components/teams/teams'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'



const index = () => {
  return (
    <>
   <div className='flex flex-col min-h-screen '>
      <Navbar/>
      <div className='flex-1'>
        <Teams></Teams>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default index;