import { useState } from "react";
import FAQcard from "./FAQcard";

export default function FAQs({ prop }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="text-4xl  mt-4 font-semibold font-Manrope">FAQ</p>

        {prop.FAQs.map((item) => (
          <FAQcard prop={item} />
        ))}
      </div>
    </>
  );
}
