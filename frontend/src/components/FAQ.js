import Link from "next/link"

export default function Announcement ({prop}) {
    return (
        <>
            <div className="flex grid rounded-xl shadow-xl lg:m-10 mr-10 mb-5 p-3 border-solid ">
                <div className=' p-2' >
                    <span className='inline-block allign-middle text-gray-500 '>FAQs</span>
                </div>
                <div className='flex grid' >
                    <div className="inline-block w-0.5 self-stretch bg-gray-300 opacity-100 dark:opacity-50 col-start-2 col-end-3"></div>
                    <div className="col-start-3 col-end-12" >
                        {prop.FAQs.map((item)=>{
                            return( 
                            <div className="w-full overflow-x-hidden m-2"  >
                                <p className='text-blue break-all ms-2 text-xs'>{`${item.ques}`}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>     
        </>
    )
}