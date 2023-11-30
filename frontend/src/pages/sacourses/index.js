import React from 'react'
import SACourses from '../../components/SACourses'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'

const index = () => {
  return (
    <div>
        <Navbar/>
        <SACourses/>
        <Footer/>
    </div>
  )
}

export default index;