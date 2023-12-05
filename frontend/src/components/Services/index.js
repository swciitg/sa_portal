import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'
import ServicesListCard from './ServicesList/ServicesListCard';

const Index = (props) => {
  const [dropDown,setDropDown] = useState(true);
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/services?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    console.log(json.data)
    console.log(json.data[0])
    if(json.data && json.data[0])
    setData(json.data[0].attributes.Services);
    // console.log("1111",data.attributes.BoardMembers[0].Logo.data.attributes.url)
    console.log(data)
  }

  useEffect(()=>{
    getItem();
  },[])

  

  return (
    <div>
        <div className='md:ml-28 my-4 md:my-12'>
            {data.length
            ?
            data.map((services) => {
                return <ServicesListCard header={services.Header} subHeader={services.SubServices}/>
            })
        :
        ""
        }
        </div>
    </div>
  )
}

export default Index;