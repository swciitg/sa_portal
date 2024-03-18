import React ,{useEffect,useState} from 'react';
import About from './About/about';
import SACard from './Card/SACard';
import Carousel from "@/components/Home/Events/Carousel/Carousel";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400","700"] });
const Index = () => {
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/courses?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    setData(json?.data[0]);
    
  }

  useEffect(()=>{
    getItem();
  },[])

    

  return (
    <div className={manrope.className}>
        { <About id={data?.id} content={data?data.attributes.About:""}/> }
        <div className='pl-[10%] pr-[15%] py-12'>
        {
          data
          ?
          data.attributes.SA_course.map((entry,key) => {
            return <SACard key={key} title={entry.Title} id={entry.Number}  url={`${process.env.NEXT_PUBLIC_API_ENDPOINT}` + entry.Image.data[0].attributes.url}/>
          })
          :
          ""
        }
            
        </div>
         <div className={`py-5 bg-[#1E2532] mb-16 ${manrope.className}`}>
          <div className='text-3xl  font-medium  pl-[8%] sm:pl-[8%]   text-[#f6f4f4]'>
            Events at IIT Guwahati
        </div>
        {data&&<Carousel prop={data.attributes}></Carousel>}
        </div>
    </div>
  )
}

export default Index;