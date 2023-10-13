import { useState } from 'react';
import FAQcard from './FAQcard'

export default function Announcement ({prop}) {
    const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
    return (
        <>
            {prop.questions.map((item) => (
                    <FAQcard prop = {item}/>
            ))}
        </>
    )
}