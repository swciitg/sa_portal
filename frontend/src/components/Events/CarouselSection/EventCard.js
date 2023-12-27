import Image from "next/image"
import { useState } from "react"

const Card = ({image,title,icon,description}) => {
    const [hoving,setHoving] = useState(null)
    return (
    <>
        <div className=" bg-white-100 rounded-lg overflow-hidden mx-2 snap-center w-[600px] h-72 my-8"   onMouseEnter={() => setHoving(true)} onMouseLeave={() => setHoving(false)}>
            <img className={hoving ? "w-full h-full blur-sm " :"w-full h-full"} src={image} alt="Card Image" />
            <div className={ hoving ? "-translate-y-40 bg-slate-600 bg-opacity-60 duration-300 w-full h-full justify-center py-2 items-end text-6xl text-white font-semibold bg-[#182133]" : "-translate-y-12 bg-slate-600 bg-opacity-60 w-full duration-300 h-full  justify-center items-end text-6xl text-white font-semibold bg-[#182133] pt-1"} >
                <div className="flex px-4" >
                <p className="text-3xl font-medium" > {title}</p>
                <div><img className="w-10 mx-5 " width='1' height='1' src={icon} alt="Card Image" ></img></div>
                </div>
                <p className={ " px-4 text-xs sm:text-sm break-normal my-5 w-full font-medium pr-60 sm:pr-2"} >{description}</p>
            </div>
        </div>
    </>
    )
}

export default Card