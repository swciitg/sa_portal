import React from 'react'
import Gymkhana from '../../components/Gymkhana'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'

const index = () => {
  return (
    <div  className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-1'>
          <Gymkhana/>
        </div>
        <Footer/>
    </div>
  )
}

export default index