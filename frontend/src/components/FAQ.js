import { useState } from 'react';
import FAQcard from './FAQcard'

export default function Announcement ({prop}) {
    const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
    return (
        <>
            <div >
                <p className="text-4xl ms-[10%] mt-4 " >FAQ</p>
            </div>
            {prop.questions.map((item) => (
                    <FAQcard prop = {item}/>
            ))}
        </>
    )
}