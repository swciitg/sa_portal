import Image from "next/image";
import { useState } from "react";

const Card = ({ image, title, icon, description, link }) => {
    const [hoving, setHoving] = useState(null);

    return (
        <>
            <a href={link}>
            <div className={`bg-white-100 rounded-lg overflow-hidden mx-2 snap-center w-[350px] sm:w-[600px] h-72 my-8`} onMouseEnter={() => setHoving(true)} onMouseLeave={() => setHoving(false)}>
                <img className={hoving ? "w-full h-full blur-sm object-cover" : "w-full h-full object-cover"} src={image} alt="Card Image" />
                <div className={`transform ${hoving ? (description?.length > 600 ? '-translate-y-52' : (description.length > 400 ? '-translate-y-40' : (description.length > 200 ? '-translate-y-32' : '-translate-y-24'))) : '-translate-y-12'} bg-slate-600 bg-opacity-60 duration-300 w-full h-full justify-center items-end text-white font-semibold bg-[#182133] pt-1`}>
                    <div className="flex px-6">
                        <p className="text-2xl font-semibold">{title}</p>
                        <div ><img className="w-10 mx-5 " width='1' height='1' src={icon} alt="Card Image"></img></div>
                    </div>
                    <p className={`px-6 text-[10px]  sm:text-xs break-normal mt-1 w-full font-medium pr-0 sm:pr-2 pb-6`}>{description}</p>
                </div>
            </div>
            </a>
        </>
    );
};

export default Card;
