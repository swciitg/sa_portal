import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import Link from 'next/link'

export default function Announcement ({prop}) {

    return (
        <>
        <div className="flex grid rounded-3xl shadow-xl m-10 p-3 border-solid">
            <div className="col-start-2 col-end-9">
                <p className="pt-3 text-s">{prop.date}</p>
                <p className="flex pb-3 text-xl font-bold" >{prop.description}</p>
            </div>
            <div className="flex col-start-10 col-end-12 text-2xl">
                <button className="inline-block allign-middle"><Link href={prop.link} ><BsFillArrowRightSquareFill/></Link></button>
            </div>
        </div>
        </>
    )
}
