import React ,{useEffect,useState} from 'react';
import About from './About/about';
import SACard from './Card/SACard';
import Carousel from "@/components/Home/Events/Carousel/Carousel";
const Index = () => {
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/courses?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    setData(json.data[0]);
    console.log(json.data[0].attributes.Event_Gallery,"hello");
  }

  useEffect(()=>{
    getItem();
  },[])

    

  return (
    <div className='font-Manrope'>
        { <About id={data.id} content={data?data.attributes.About:""}/> }
        <div className='pl-[10%] pr-[15%] py-12'>
        {
          data
          ?
          data.attributes.SA_course.map((entry,key) => {
            return <SACard key={key} title={entry.Title} id={entry.Number}  url={"https://swc.iitg.ac.in/saPortal" + entry.Image.data[0].attributes.url}/>
          })
          :
          ""
        }
            
        </div>
         <div className=' py-10  bg-[#1E2532]'>
          <div className='text-3xl sm:text-4xl leading-10 py-6 md:py-8  font-medium pl-[10%] sm:pl-[10%]   text-[#f6f4f4]'>
            Events at IIT Guwahati
        </div>
        {data&&<Carousel prop={data.attributes}></Carousel>}
  
        </div>

    </div>
  )
}

export default Index;