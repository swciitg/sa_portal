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

    return (
        <>
            <div className="rounded overflow-hidden shadow-lg max-w-sm">
                <Image
                src={prop.img}
                alt="image"
                className="w-full"
                width = "300"
                height="200"
                ></Image>
                <div className="px-6-py-4">
                    <p className="font-bold text-2xl px-4 py-2">{prop.name}</p>
                    <p className="text-xl-mb-2 text-gray-400 px-4 py-2">{prop.designation}</p>
                </div>
                <div className=" pb-2 px-4 " >
                    {prop.buttons.map((button)=>{
                        return (
                            <button key={button.id} style={{backgroundColor:"rgb(167 139 250)"}} className=" hover:cursor-pointer rounded-full px-3 py-0.5 text-xs font-base mx-0.5 mb-px">{button.value}</button>
                        )
                    })}
                    <hr className="solid text-gray-500 my-1 " />
                </div>
                <div>   
                    <div className="flex" >
                        <span className="text-gray-400 px-4 " >{prop.link}</span>
                        <span className="hover:cursor-pointer" onClick={clickHandler} >{icon}</span>
                    </div>                    
                    <div className="flex" >
                        <span className="text-gray-400 px-4 " >{`${prop.phone}`}</span>
                        <span className="hover:cursor-pointer" onClick={clickHandler2} >{icon2}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

// 