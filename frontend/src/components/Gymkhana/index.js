import React, { useEffect, useState } from 'react'
import GymkhanaCard from './BoardCard3/BoardCard3.js'
import Content from './BoardCard3/content.js'
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400","700"] });

const Index = () => {
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}api/gymkhanas?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    setData(json.data[0]);
    // console.log("1111",data.attributes.BoardMembers[0].Logo.data.attributes.url)
  }

  useEffect(()=>{
    getItem();
  },[])

    

  return (
    <div className={manrope.className}>
        <Content id={data?.id} content={data?data.attributes.About:""}/>
        <div className='pl-[4%] md:pl-[10%] pr-[8%] md:pr-[15%] py-12'>
        {
          data
          ?
          data.attributes.BoardMembers.map((entry,key) => {
            return <GymkhanaCard key={key} url={`${process.env.NEXT_PUBLIC_API_ENDPOINT}` +entry.Image.data.attributes.url} name={entry.Name} role={entry.Role} board={entry.BoardName} aboutBoard={entry.About_Board} link={entry.Link} logo={`${process.env.NEXT_PUBLIC_API_ENDPOINT}` + entry.Logo.data.attributes.url}/>
          })
          :
          ""
        }
            
        </div>
    </div>
  )
}

export default Index;