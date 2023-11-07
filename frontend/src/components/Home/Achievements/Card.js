import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Link from "next/link";

const Card = ({ props }) => {
  return (
    <div className="max-w-sm mx-auto text-center rounded-2xl shadow-3xl p-6 md:p-7 mb-10 w-full">
      {/* image if there */}
      {props.Image.data ? (
        <img
          className="h-32 md:h-36 w-full mb-5 object-cover rounded-2xl"
          src={`https://swc.iitg.ac.in/saPortal/${props.Image.data.attributes.url}`}
        />
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
      <div>
        <div className="text-start text-xs md:text-sm text-greyblue font-catamaran">
          {props.Paragraph}
        </div>
      </div>

      {/* read more link */}
      <Link href="/" className="flex justify-end items-center gap-2 pt-2">
        <div className="font-mono text-sm text-darkblue font-medium pb-0.5">
          Read more
        </div>

        <div>
          <BsFillArrowRightSquareFill className="text-darkblue " />
        </div>
      </Link>
    </div>
  );
};

export default Card;
