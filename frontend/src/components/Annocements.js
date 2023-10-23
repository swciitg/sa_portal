import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import Link from 'next/link'

export default function Announcement ({prop}) {
    return (
        <>
        {prop.prop.Announcements.map((item)=>{
            return(
            <div className="flex grid rounded-3xl shadow-xl lg:ms-10 lg:ml-10 mr-10 p-3 border-solid">
                <div className="col-start-2 col-end-9">
                    <p className="ps-3 pl-3 pt-3 text-md">{item.date}</p>
                    <p className="p-3 text-sm font-semibold break-all  " >{item.description}</p>
                </div>
                <div className="flex col-start-10 col-end-12 text-2xl">
                    <button className="inline-block allign-middle"><Link href={item.link} className='text-darkblue' ><BsFillArrowRightSquareFill className='rounded-lg' /></Link></button>
                </div>
            </div>
            )
        })}
        
        </>
    )
}
