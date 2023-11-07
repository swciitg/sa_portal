import Image from "next/image"
import { useState } from "react"

const Card = ({image,title,icon,description}) => {
    const [hoving,setHoving] = useState(null)
    return (
    <>
        <div className=" bg-white-100 rounded-lg overflow-hidden mx-2 snap-center w-[600px] h-mobileimg sm:h-laptopimg"   onMouseEnter={() => setHoving(true)} onMouseLeave={() => setHoving(false)}>
            <img className={hoving ? "w-full h-full blur-sm " :"w-full h-full"} src={image} alt="Card Image" />
            <div className={ hoving ? "-translate-y-40 bg-slate-600 bg-opacity-60 duration-300 w-full h-full justify-center py-2 items-end text-6xl text-white font-semibold" : "-translate-y-12 bg-slate-600 bg-opacity-60 w-full duration-300 h-full py-2 justify-center items-end text-6xl text-white font-semibold"} >
                <div className="flex px-4" >
                <p className="text-4xl" > {title}</p>
                <div><Image className="w-full h-full mx-5 rounded-full" width='5' height='5' src={icon} alt="Card Image" ></Image></div>
                </div>
                <p className={ " px-4 text-xs break-normal my-5 w-full "} >{description}</p>
            </div>
        </div>
    </>
    )
}

export default Card