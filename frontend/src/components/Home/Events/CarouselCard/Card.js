import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import {BsFillArrowRightSquareFill } from "react-icons/bs";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['500'],
});

const redhat = Red_Hat_Display({
    subsets: ['latin'],
    weight: ['300'],
});

const Card = ({data}) => {
   

    return (
        <div className="">
        <div 
        style={{ 
        backgroundImage: `url(${data.Image.data[0] ? 
            `https://swc.iitg.ac.in/sa_portal_backend/${data.Image.data[0].attributes.url}` : 
            'https://swc.iitg.ac.in/sa_portal_backend/' + 
            (data.Image.data && data.Image.data.attributes ? 
                data.Image.data.attributes.url : '')})` 
    }}  
        className="hover:scale-105 ease-in duration-300 h-80   mx-auto text-center rounded-[40px] shadow-3xl overflow-hidden bg-no-repeat object-cover bg-cover relatiive">
            {/* <div className='flex h-56'>

            </div> */}
            <div className='flex-col absolute w-full bottom-0  pt-2 pb-4 px-2 md:px-12 bg-[#182133C2] bg-opacity-1000'>
                <div className="flex flex-row h-6 w-full justify-between">
                    <div className="flex h-4 pb-6 justify-center align-middle">
                        <div className={`${redhat.className} text-sm md:text-base  tracking-wider font-semibold text-white`}>
                            {data.Date ? data.Date.slice(0, 10) : ''}
                        </div>
                    </div>
                    {/* <Link href={data.Redirect_url}>
                        <Image
                            src = "/public/icons/RightArrow.png"
                            width={2}
                            height={2}
                            className="flex w-4 h-4"
                        />
                    </Link> */}
                    <div className="flex col-start-10 col-end-12 text-2xl">
        <button className="inline-block align-middle">
          <Link href={data.Redirect_url} className="text-white">
            <BsFillArrowRightSquareFill className="rounded-lg" />
          </Link>
        </button>
      </div>
                </div>
                <div className="flex text-left mt-3w-11/12">
                <div className={`${raleway.className}   text-white text-xs md:text-sm lg:text-base `}>
                        {data.Info}
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;
