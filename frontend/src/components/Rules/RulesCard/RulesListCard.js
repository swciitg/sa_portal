import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp, BsChevronRight } from "react-icons/bs";

const RulesListCard = (props) => {
  const [dropDown, setDropDown] = useState(true);

  return (
    <div
      className="w-full rounded-lg md:rounded-xl shadow-lg py-0 my-2 font-Manrope flex"
      style={{ "box-shadow": "rgba(0, 0, 0, 0.25)" }}
    >
      <div
        className="w-24 md:w-28 flex justify-center items-center border-r-2 py-auto text-xs sm:text-base font-medium"
        style={{ "border-color": "#D9D9D9" }}
      >
        {props.num}
      </div>
      <div className="w-full h-full flex justify-between items-center mx-2 md:mx-10 py-5">
        <div className=" text-xs sm:text-base  font-medium w-[80%] px-[2%]">
          {props.header}
        </div>
        <div className="flex flex-wrap gap-y-3 md:gap-x-3 w-16 lg:w-48">
          <div className="bg-[#efefef] rounded-xl text-xs sm:text-base p-2  px-4 sm:px-6 py-2 ">
            <Link
              href={
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}` +
                `${props.link?.data?.attributes?.url}`
              }
            >
              PDF
            </Link>
          </div>
          {props.wordlink?.data ? (
            <div className="bg-[#efefef] rounded-xl text-xs sm:text-base p-2  px-4 sm:px-6 py-2">
              <Link
                href={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${props.wordlink?.data?.attributes?.url}`}
              >
                Word
              </Link>
            </div>
          ) : (
            <div
              className="bg-gray-300 rounded-xl text-xs sm:text-base p-2  px-4 sm:px-6 py-2 cursor-not-allowed"
              title="Word file not available"
            >
              Word
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RulesListCard;
