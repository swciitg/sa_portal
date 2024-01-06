import Card from './Card'
import { useState } from 'react'

const teams = ({prop}) => {

    const [opt,setOpt] = useState(1)
    if (prop.data && prop.data.length > 0 && prop.data[0].attributes && prop.data[0].attributes.Team_Members && prop.data[0].attributes.Team_Members.length > 0) {
        return (
            <>
                <div className="flex-col sm:flex-row justify-between mx-[10%] mt-[2%] " >
                    {prop.data.map((button)=>{
                        return(
                            <button className="rounded-2xl mx-[2%] hover:bg-[#1E2532]  hover:text-white p-2 shadow-lg" onClick={()=>{setOpt(`${button.id}`)}}>
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