import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Link from "next/link";

const Card = ({ props }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`max-w-sm text-center rounded-2xl shadow-3xl p-6 md:p-7 mb-10 w-full font-[Manrope]  `}>
      {/* image if there */}
      {props.Image.data ? (
        <>
        <div className="bg-gray-200 rounded-md ">
        <img
          className="h-32 md:h-36  w-full object-contain rounded-md"
          src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${props.Image.data.attributes.url}`}
        />
        </div>
        </>
      ) : (
        ""
      )}

      {/* main title */}
      <div className="mb-2 md:mb-3">
        <div className="text-start text-md font-raleway tracking-wide font-semibold leading-tight text-darkblue">
          {props.Heading}
        </div>
      </div>

      {/* detail of card */}
      <div className={`text-start text-xs md:text-sm text-greyblue font-catamaran overflow-hidden ${expanded ? 'h-10' : ''}`}>
        {props.Paragraph}
      </div>

      {/* read more link */}
      {props.Paragraph.split(" ").length > 15 && (
        <div onClick={toggleReadMore} className="flex justify-end items-center gap-2 pt-2 cursor-pointer">
          <div className="font-mono text-sm text-darkblue font-medium pb-0.5">
            {expanded ? 'Read more' : 'Read less'}
          </div>

          <div>
            <BsFillArrowRightSquareFill className="text-darkblue" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
