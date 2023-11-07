import Card from './Card'
import { useState } from 'react'

const teams = ({prop}) => {
    const [opt,setOpt] = useState("SA Functionaries")
    return (
        <>
            <div className="flex justify-between mx-[10%] mt-[2%] " >
                {prop.buttons.map((button)=>{
                    return(
                        <button className="rounded-2xl hover:bg-black hover:text-white p-2 shadow-lg" onClick={()=>{setOpt(`${button}`)}}>
                            {`${button}`}
                        </button>
                    )
                })}
            </div>
            <div className="mx-[5%] gap-x-5 grid grid-cols-4 flex p-4" >
                {opt=="SA Functionaries" && prop.SAFunctionaries.map((item)=>{
                    return(
                        <>
                            <div className="mt-[5%]" >
                                <Card prop = {item}/>
                            </div>
                        </>
                    )
                })}
                {opt=="Board Functionaries" && prop.BoardFunctionaries.map((item)=>{
                    return(
                        <>
                            <div className="mt-[5%]" >
                                <Card prop = {item}/>
                            </div>
                        </>
                    )
                })}
                {opt=="Students' Gymkhana" && prop.StudentsGymkhana.map((item)=>{
                    return(
                        <>
                            <div className="mt-[5%]" >
                                <Card prop = {item}/>
                            </div>
                        </>
                    )
                })}
                {opt=="SA Staff" && prop.SAStaff.map((item)=>{
                    return(
                        <>
                            <div className="mt-[5%]" >
                                <Card prop = {item}/>
                            </div>
                        </>
                    )
                })}
                {opt=="Gymkhana Staff" && prop.GymkhanaStaff.map((item)=>{
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
}

export default teams