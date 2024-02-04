import Image from "next/image"
import {MdOutlineContentCopy} from 'react-icons/md'
import {BsCheck2} from 'react-icons/bs'
import {  useState } from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400","500","700","800","200"] });

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
            <div className={`rounded overflow-hidden shadow-lg  ${manrope.className}`}>
                <Image
                src={`https://swc.iitg.ac.in/sa_portal_backend${prop.Profile_Photo.data.attributes.formats.medium.url}`}
                className="h-48 w-full object-cover"
                alt="image"
                width={300}
                height={50}
                layout="fixed"
                ></Image>
                <div className="px-6-py-4">
                    <p className="font-semibold text-2xl px-2 pt-2 ">{prop.Name}</p>
                    <p className="text-xl-mb-2 text-gray-400 pt-1 pb-0.5 text-[#0000008f]  px-2 font-semibold">{prop.Designation}</p>
                </div>
                <div className=" pb-2 px-2 h-[2.5em] overflow-auto " >
                    {prop.Issues.map((button)=>{
                        return (
                            <button key={button.id} style={{backgroundColor:"rgb(167 139 250)"}} className="hover:cursor-pointer rounded-full px-2 py-0.5 text-xs font-base mx-0.5 mb-px">{button.Value}</button>
                        )
                    })}
                    
                </div>
                <hr className="solid text-gray-500 my-1 " />
                <div>   
                    <div className="flex" >
                        <span className="text-[#0000008f] px-4 " >{prop.Email}</span>
                        <span className="hover:cursor-pointer text-[#0000008f]" onClick={clickHandler} >{icon}</span>
                    </div>                    
                    <div className="flex" >
                        <span className="text-[#0000008f] px-4 " >{`+91 ${prop.Phone_Number}`}</span>
                        <span className="hover:cursor-pointer text-[#0000008f]" onClick={clickHandler2} >{icon2}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

// 