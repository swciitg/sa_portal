import React from 'react'
import SACourses from '../../components/SACourses'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'

const index = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-1'>
        <SACourses/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default index;