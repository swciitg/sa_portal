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
    <div>
        <Navbar/>
        <Teams prop = {data} />
        <Footer/>
    </div>
    </>
  )
}

export default index;