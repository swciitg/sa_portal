import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsChevronDown ,  BsChevronUp ,BsChevronRight } from 'react-icons/bs'
import ServicesListCard from './ServicesList/ServicesListCard';
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400"] });
const Index = (props) => {
  const [dropDown,setDropDown] = useState(true);
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/services?populate=deep`, {
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
    <div className={manrope.className}>
        <div className='min-h-[190px] ml-0 md:ml-24 lg:ml-40 my-4 md:my-12'>
            {data.length
            ?
            data.map((services) => (
  <ServicesListCard
    key={services.id}
    header={services.Header}
    subHeader={services.SubServices}
  />
))
        :
        ""
        }
        </div>
    </div>
  )
}

export default Index;