import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import SACList from '@/components/SAC/index';
import React from 'react';

const index = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar/>
      <div className='flex-1'>
        <SACList/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default index