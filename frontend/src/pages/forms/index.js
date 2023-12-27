import Footer from '@/components/Footer/Footer';
import Form from '@/components/Form';
import Navbar from '@/components/Navbar/Navbar';
import RulesList from '@/components/Rules';
import React from 'react';

const index = () => {
  return (
    < div className='flex flex-col min-h-screen '>
      
      <Navbar/>
      <div className='flex-1'>
      <Form></Form>
     </div>
        <Footer/>
    
    </div>
    
  )
}

export default index