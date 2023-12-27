import Card from './Card'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const buttons = [
    "Board Functionaries",
    "SA Functionaries",
    "Student's Gymkhana"
]

const teams = ({prop}) => {

    
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const [hamburger, setHamburger] = useState(false);
    
    const [opt,setOpt] = useState("SA Functionaries")
    if (prop.data && prop.data.length > 0 && prop.data[0].attributes && prop.data[0].attributes.Team_Members && prop.data[0].attributes.Team_Members.length > 0) {
        console.log(prop.data[0].attributes.Team_Members);
        return (
            <>
                <div className="flex-col sm:flex-row sm:justify-between mx-[10%] mt-[2%] " >
                    {buttons.map((button)=>{
                        return(
                            <button className="rounded-2xl hover:bg-black hover:text-white p-2 shadow-lg" onClick={()=>{setOpt(`${button}`)}}>
                                {`${button}`}
                            </button>
                        )
                    })}
                </div>
                
                <div className="mx-[5%] gap-x-5 grid sm:grid-cols-4 flex p-4" >
                    {opt=="SA Functionaries" && prop.data[0].attributes.Team_Members.map((item)=>{
                        return(
                            <>
                                <div className="mt-[5%]" >
                                    <Card prop = {item}/>
                                </div>
                            </>
                        )
                    })}
                    {opt=="Board Functionaries" && prop.data[2].attributes.Team_Members.map((item)=>{
                        return(
                            <>
                                <div className="mt-[5%]" >
                                    <Card prop = {item}/>
                                </div>
                            </>
                        )
                    })}
                    {opt=="Student's Gymkhana" && prop.data[1].attributes.Team_Members.map((item)=>{
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