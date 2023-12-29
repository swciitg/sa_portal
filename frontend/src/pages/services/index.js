import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ServicesList from '@/components/Services/index';
import React from 'react';

const index = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar/>
      <div className='flex-1'>
        <ServicesList/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default index