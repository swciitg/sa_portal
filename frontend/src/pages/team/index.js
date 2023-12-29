import React from 'react'
import Teams from '../../components/teams/teams'
import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar'
import { useState,useEffect } from 'react'


const index = () => {
    const [data, setData] = useState("");
  
    const getItem = async () => {
      const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/teams?populate=deep`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      });
      
      const json = await response.json();
      setData(json);
    }
  
    useEffect(()=>{
      getItem();

    },[])

        // console.log(data);
  return (
    <>
   <div className='flex flex-col min-h-screen '>
      <Navbar/>
      <div className='flex-1'>
        <Teams prop={data}></Teams>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default index;