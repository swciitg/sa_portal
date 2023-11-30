import React ,{useEffect,useState} from 'react';
import About from './About/about';
import SACard from './Card/SACard';

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
    console.log(json.data[0].attributes.SA_course[0].Image.data[0].attributes.url,"hello");
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
    </div>
  )
}

export default Index;