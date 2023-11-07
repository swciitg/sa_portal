import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import RulesList from '@/components/Rules';
import React from 'react';

const index = () => {
  return (
    <div className='min-h-full absolute w-full'>
      <Navbar/>
      <RulesList/>
      <div className='relative bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
    
  )
}

export default index