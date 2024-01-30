import Card from './Card'
import { useState,useEffect } from 'react'
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400","500","700","800","200"] });
const Teams = () => {
        const [prop, setProp] = useState("");

    const getItem = async () => {
      const response = await fetch(`https://swc.iitg.ac.in/sa_portal_backend/api/teams?populate=deep`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      });

      const json = await response.json();
      setProp(json);
    }

    useEffect(()=>{
      getItem();

    },[])
    const [opt,setOpt] = useState(1)
    if (prop.data && prop.data.length > 0 && prop.data[0].attributes && prop.data[0].attributes.Team_Members && prop.data[0].attributes.Team_Members.length > 0) {
        return (
            <>
                <div className={`flex-col sm:flex-row justify-between mx-[10%] mt-[2%] ${manrope.className} `} >
                    {prop.data.map((button) => {
    return (
        <button
            key={button.id} 
            className=" mx-[2%] hover:bg-[#1E2532] hover:text-white  sm:p-2 p-3 font font-medium  text-xs sm:text-sm flex items-center justify-center  shadow-lg rounded-xl box-border"
            onClick={() => { setOpt(`${button.id}`) }}
        >
            {`${button.attributes.Name}`}
        </button>
    )
})}

                </div>
                
                <div className={`mx-[5%] gap-x-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex p-4 ${manrope.className}`} >
                   {prop.data[opt - 1].attributes.Team_Members.map((item) => {
    return (
        <div key={item.id} className="mt-[5%]">
            <Card prop={item} />
        </div>
    );
})}

                </div>
            </>
        )
    } else {
        console.log('Data structure is not as expected');
    }
    
}

export default Teams