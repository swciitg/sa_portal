import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";
import { useState } from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400", "500", "700", "800", "200"],
});

export default function Card({ prop }) {
  const [icon, setIcon] = useState(<MdOutlineContentCopy />);
  const [icon2, setIcon2] = useState(<MdOutlineContentCopy />);

  const clickHandler = () => {
    navigator.clipboard.writeText(prop.Email);
    setIcon(<BsCheck2 style={{ color: "green" }} />);
    setTimeout(() => {
      setIcon(<MdOutlineContentCopy />);
    }, 3000);
  };
  const clickHandler2 = () => {
    navigator.clipboard.writeText(prop.Phone_Number);
    setIcon2(<BsCheck2 style={{ color: "green" }} />);
    setTimeout(() => {
      setIcon2(<MdOutlineContentCopy />);
    }, 3000);
  };

 /* console.log(prop.Profile_Photo.data.attributes.formats.thumbnail.url, "hhhh");*/

  return (
    <>
      <div
        className={`bg-gray-100 rounded overflow-hidden shadow-lg ${manrope.className} sm:w-[70vw] lg:w-[30vw] `}>
        <div className="bg-gray-200 rounded-md">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${prop.Profile_Photo.data.attributes.url}`}
            className="h-[250px] sm:w-[68vw] lg:-[28vw] object-contain rounded-md"
            alt="image"
            width={300}
            height={50}
            layout="fixed"
          ></Image>
        </div>
        <div className="px-6-py-4 ">
          <p className="font-semibold text-3xl px-2 pt-2 ">{prop.Name}</p>
          <p className="text-2xl-mb-2 text-gray-300 pt-2 pb-2  leading-5 tracking-wide px-2 font-semibold">
            {prop.Designation}
          </p>
        </div>
         <div className=" pb-2 px-2 h-[2.5em] overflow-auto ">
          {prop.Issues.map((button) => {
            return (
              <button
                key={button.id}
                style={{ backgroundColor: "rgb(167 139 250)" }}
                className="hover:cursor-pointer rounded-full px-2 py-0.5 text-sm font-medium mx-0.5 mb-px"
              >
                {button.Value}
              </button>
            );
          })}
        </div> 
        <hr className="solid text-gray-500 my-1 " />
        <div>
          <div className="flex p-2">
            <span className=" font-thin leading-5 tracking-wide px-4  ">{prop.Email}</span>
            <span
              className="hover:cursor-pointer"
              onClick={clickHandler}
            >
              {icon}
            </span>
          </div>
          <div className="flex p-2">
            <span className=" font-thin leading-5 tracking-wide px-4 ">{`${prop.Phone_Number}`}</span>
            <span
              className="hover:cursor-pointer"
              onClick={clickHandler2}
            >
              {icon2}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

//
