import React from 'react'
import Events from '../../components/Events'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'

const index = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex flex-1'>
        <Events/>
        </div>
        <Footer/>
    </div>
    //   <div className='flex flex-col min-h-screen '>
    //   <Navbar/>
    //   <div className='flex-1'>
    //     <RulesList/>
    //   </div>
    //   <Footer/>
    // </div>
  )
}

export default index;