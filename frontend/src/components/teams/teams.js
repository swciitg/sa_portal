import Card from './Card'
import { useState,useEffect } from 'react'


const teams = () => {
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
    
    const prop = data
        // console.log(data);
    
    const [opt,setOpt] = useState(1)
    if (prop.data && prop.data.length > 0 && prop.data[0].attributes && prop.data[0].attributes.Team_Members && prop.data[0].attributes.Team_Members.length > 0) {
        return (
            <>
                <div className="flex-col sm:flex-row justify-between mx-[10%] mt-[2%] " >
                    {prop.data.map((button)=>{
                        return(
                            <button className="rounded-2xl mx-[2%] hover:bg-black hover:text-white p-2 shadow-lg" onClick={()=>{setOpt(`${button.id}`)}}>
                                {`${button.attributes.Name}`}
                            </button>
                        )
                    })}
                </div>
                
                <div className="mx-[5%] gap-x-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex p-4" >
                    {prop.data[opt-1].attributes.Team_Members.map((item)=>{
                        return(
                            <>
                                <div className="mt-[5%]" >
                                    <Card prop = {item}/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </>
        )
    } else {
        console.log('Data structure is not as expected');
    }
    
}

export default teams