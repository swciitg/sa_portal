import Image from "next/image"
import {MdOutlineContentCopy} from 'react-icons/md'
import {BsCheck2} from 'react-icons/bs'
import {  useState } from "react"

export default function Card ({prop}) {

    const [icon,setIcon] = useState(<MdOutlineContentCopy/>)
    const [icon2,setIcon2] = useState(<MdOutlineContentCopy/>)

    const clickHandler = () => {
        navigator.clipboard.writeText(prop.link)
        setIcon(<BsCheck2 style={{color:"green"}} />)
        setTimeout(() => {setIcon(<MdOutlineContentCopy/>)},"3000")
    } 
    const clickHandler2 = () => {
        navigator.clipboard.writeText(prop.phone)
        setIcon2(<BsCheck2 style={{color:"green"}} />)
        setTimeout(() => {setIcon2(<MdOutlineContentCopy/>)},"3000")
    } 

    console.log(prop.Profile_Photo.data.attributes.formats.medium.url)

    return (
        <>
            <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image
                src={`https://swc.iitg.ac.in/saPortal${prop.Profile_Photo.data.attributes.formats.medium.url}`}
                alt="image"
                className="w-full"
                width = "300"
                height="200"
                ></Image>
                <div className="px-6-py-4">
                    <p className="font-bold text-2xl px-4 py-2">{prop.name}</p>
                    <p className="text-xl-mb-2 text-gray-400 px-4 py-2">{prop.Designation}</p>
                </div>
                <div className=" pb-2 px-4 min-h-[3em] " >
                    {prop.Issues.map((button)=>{
                        return (
                            <button key={button.id} style={{backgroundColor:"rgb(167 139 250)"}} className="hover:cursor-pointer rounded-full px-3 py-0.5 text-xs font-base mx-0.5 mb-px">{button.Value}</button>
                        )
                    })}
                    
                </div>
                <hr className="solid text-gray-500 my-1 " />
                <div>   
                    <div className="flex" >
                        <span className="text-gray-400 px-4 " >{prop.Email}</span>
                        <span className="hover:cursor-pointer" onClick={clickHandler} >{icon}</span>
                    </div>                    
                    <div className="flex" >
                        <span className="text-gray-400 px-4 " >{`+91 ${prop.Phone_Number}`}</span>
                        <span className="hover:cursor-pointer" onClick={clickHandler2} >{icon2}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

// 