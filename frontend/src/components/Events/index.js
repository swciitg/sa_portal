import React ,{useEffect,useState} from 'react';
import About from './About/about';
import EventCarousel from './CarouselSection/EventCarousel'

const Index = () => {
  const [data, setData] = useState("");

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/sa_portal_backend/api/events?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    setData(json.data[0]);
    console.log(json.data[0].attributes.Technical_Events[0].Icon.data[0].attributes.url,"hello");
  }

  useEffect(()=>{
    getItem();
  },[])

    

  return (
    <div className='font-Manrope'>
        { <About id={data.id} content={data?data.attributes.About:""}/> }
       <div className='text-4xl leading-10 py-6 md:py-8 mx-[15%]  font-medium text-[#231F20]'>
            Technical 
        </div>

        {data && data.attributes.Technical_Events && (
  <EventCarousel props={data.attributes.Technical_Events} />
)}
  <div className='text-4xl leading-10 py-6 md:py-8 mx-[15%]  font-medium  text-[#231F20]'>
            Cultural 
        </div>

        {data && data.attributes.Cultural_Events && (
  <EventCarousel props={data.attributes.Cultural_Events} />
)}
        
    </div>
  )
}

export default Index;