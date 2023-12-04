import React from 'react'
import Events from '../../components/Events'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'

const index = () => {
  return (
    <div>
        <Navbar/>
        <Events/>
        <Footer/>
    </div>
  )
}

export default index;