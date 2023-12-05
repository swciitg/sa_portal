import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ServicesList from '@/components/Services/index';
import React from 'react';

const index = () => {
  return (
    <div className='min-h-full absolute w-full'>
      <Navbar/>
      <ServicesList/>
      <div className='absolute bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
    
  )
}

export default index