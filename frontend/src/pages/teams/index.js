import React from 'react'
import Teams from '../../components/teams/teams'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'


const index = () => {
   
  return (
    <>
    <div>
        <Navbar/>
        <Teams />
        <Footer/>
    </div>
    </>
  )
}

export default index;