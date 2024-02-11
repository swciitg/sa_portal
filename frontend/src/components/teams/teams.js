import Card from './Card';
import { useState, useEffect } from 'react';
import { Manrope } from "next/font/google";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400", "500", "700", "800", "200"] });

const Teams = () => {
  const [prop, setProp] = useState("");
  const [opt, setOpt] = useState(1);

  const getItem = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/teams?populate=deep`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await response.json();
    setProp(json);
  }

  useEffect(() => {
    getItem();
  }, [])

  if (prop.data && prop.data.length > 0 && prop.data[0].attributes && prop.data[0].attributes.Team_Members && prop.data[0].attributes.Team_Members.length > 0) {
    return (
      <>
        <div className={`flex flex-wrap w-[80%] gap-6 text-xs py-2 ${manrope.className} mx-[8%] `}>
          {prop.data.map((button, index) => (
            <button
              key={button.id}
              className={`${
                opt === index + 1
                  ? 'bg-[#1e2532] text-white'
                  : 'bg-white text-black'
              } sm:py-2 py-3 px-[3%] font font-medium text-xs sm:text-sm flex items-center justify-center shadow-lg rounded-xl box-border`}
              onClick={() => { setOpt(index + 1) }}
            >
              {button.attributes.Name}
            </button>
          ))}
        </div>

        <div className={`mx-[7%] my-[5%] gap-x-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex p-4 ${manrope.className}`}>
          {prop.data[opt - 1].attributes.Team_Members.map((item) => (
            <div key={item.id} className="mt-[5%]">
              <Card prop={item} />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    console.log('Data structure is not as expected');
    return null; // Add your error handling or loading indicator here if needed
  }
}

export default Teams;
