import Footer from '@/components/Footer/Footer';
import Form from '@/components/Form';
import Navbar from '@/components/Navbar/Navbar';
import RulesList from '@/components/Rules';
import React from 'react';

const index = () => {
  return (
    <div className='min-h-full absolute w-full'>
      <Navbar/>
      <Form></Form>
      <div className='absolute bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
    
  )
}

export default index