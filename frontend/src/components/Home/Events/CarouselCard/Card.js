import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";

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
        <div className="p-12">
        <div 
        style={{ 
        backgroundImage: `url(${data.Image.data[0] ? 
            `https://swc.iitg.ac.in/sa_portal_backend/${data.Image.data[0].attributes.url}` : 
            'https://swc.iitg.ac.in/sa_portal_backend/' + 
            (data.Image.data && data.Image.data.attributes ? 
                data.Image.data.attributes.url : '')})` 
    }}  
        className="hover:scale-110 ease-in duration-300 h-96 mx-auto text-center rounded-[40px] shadow-3xl overflow-hidden">
            <div className='flex h-64'>

            </div>
            <div className='flex-col h-32 pt-5 pb-5 px-2 md:px-12 bg-[#182133C2] bg-opacity-1000'>
                <div className="flex flex-row h-4 w-full justify-between">
                    <div className="flex h-4 justify-center align-middle">
                        <div className={`${redhat.className} text-sm md:text-base  tracking-wide text-white`}>
                            {data.Date ? data.Date.slice(0, 10) : ''}
                        </div>
                    </div>
                    <Link href={data.Redirect_url}>
                        <Image
                            src = "public\icons/RightArrow.png"
                            width={2}
                            height={2}
                            className="flex w-4 h-4"
                        />
                    </Link>
                </div>
                <div className="flex text-left mt-3 w-11/12">
                <div className={`${raleway.className} leading-6  tracking-wider text-white text-sm md:text-base lg:text-lg`}>
                        {data.Info}
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;
