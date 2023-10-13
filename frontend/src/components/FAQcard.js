import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
import { useState } from 'react';

export default function Announcement ({prop}) {
    const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
    return (
        <>
            <div className='rounded-xl shadow-xl m-10 p-3 border-solid '>
                <div className="flex grid ">
                    <div className='col-start-1 col-end-2 p-2' >
                        <span className='inline-block allign-middle'>{`Q ${prop.id}`}</span>
                    </div>
                    <div >
                        <div className='flex' >
                            <div class="inline-block w-0.5 self-stretch bg-gray-300 opacity-100 dark:opacity-50"></div>
                            <div className='mx-4 p-1' >
                                <span className='inline-block allign-middle'>{`${prop.ques}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-start-10 col-end-12' >
                        {!show && <button className='bg-gray-200 p-2 rounded-xl' onClick={toggleShow}>Ans <span className='inline-block allign-middle'>{<MdKeyboardArrowDown/>}</span></button>}
                        {show && <button className='bg-gray-200 p-2 rounded-xl' onClick={toggleShow}>Ans <span className='inline-block allign-middle'>{<MdKeyboardArrowUp/>}</span></button>}
                    </div>
                </div>
                <div style={{width:"100%", justifyContent:"center"}}  className='mx-2 grid flex'>
                    {show && <div  className='block p-1' >
                        <span className='inline-block allign-middle text-xs text-gray-400'>{`${prop.ans}`}</span>
                    </div>}
                </div>                        
            </div>
        </>
    )
}