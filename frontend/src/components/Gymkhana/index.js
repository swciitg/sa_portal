import React, { useEffect, useState } from 'react'
import GymkhanaCard from './BoardCard3/BoardCard3.js'
import Content from './BoardCard3/content.js'

const Index = () => {
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/gymkhanas?populate=deep`, {
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
    <div>
        <Content id={data.id} content={data?data.attributes.About:""}/>
        <div className='pl-[10%] pr-[15%] py-12'>
        {
          data
          ?
          data.attributes.BoardMembers.map((entry,key) => {
            return <GymkhanaCard key={key} url={"https://swc.iitg.ac.in/saPortal" +entry.Image.data.attributes.url} name={entry.Name} role={entry.Role} board={entry.BoardName} aboutBoard={entry.About_Board} link={"https://swc.iitg.ac.in/saPortal" + entry.Image.data.attributes.url} logo={"https://swc.iitg.ac.in/saPortal" + entry.Logo.data.attributes.url}/>
          })
          :
          ""
        }
            
        </div>
    </div>
  )
}

export default Index;