import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "500"] });

const Form = () => {
  //dummy data
  const [data, setData] = useState(null);

  const getItem = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/forms?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    
    setData(json.data);
    console.log(data);
    // console.log(json.data[0].attributes.Forms[0].URL.data.attributes.url,"hellodd");
  }

  useEffect(()=>{
    getItem();
  },[])
  //active tab
  data&&data.map((item,index)=>{
    // console.log(item.attributes.Forms[0],"item");

  })
  const [activeTab, setActiveTab] = useState(0);
  const handletabchange = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className={manrope.className}>
        <div className="flex flex-col w-full gap-8 items-center py-6">
          <div className="flex flex-wrap w-[80%] gap-6 text-xs">
            {data&&data.map((item, index) => {
              return (
                <button
                  key={item.attributes.Name}
                  className={`${
                    index == activeTab ? "bg-[#1e2532] text-white" : "bg-white"
                  } ${"sm:py-2 py-3 px-[2%] font font-medium  text-xs sm:text-sm flex items-center justify-center  shadow-lg rounded-xl box-border"}`}
                  onClick={() => handletabchange(index)}
                >
                  {item.attributes.Name} 
                </button>
              );
            })}
          </div>
          <div className="w-[80%]">
            {data&&data.map((item, index) => {
              return (
                <div
                  key={item.attributes.Name}
                  className={`${
                    index == activeTab ? "block" : "hidden"
                  } ${"flex flex-col gap-4 w-full"}`}
                >
           {item.attributes.Forms.map((form) => {
  return (
    <div key={form.id} className="flex shadow-md rounded-xl w-full bg-[#FCFCFD] px-1 py-4 box-border font-medium sm:p-6">
      <div className="flex flex-col items-center justify-center px-2 box-border border-r-2 border-[#1e2532] w-40">
        <div className="text-xs sm:text-base text-[#2e2e2fbf]">
          {item.attributes.Name}
        </div>
        <div className="text-xs sm:text-base text-[#2e2e2fbf]">{form.Date}</div>
      </div>
      <div className="flex justify-between w-full px-4 box-border items-center sm:pl-8">
        <div className="text-xs sm:text-base">
          {form.Header}
        </div>
        <div className="flex flex-wrap justify-between w-24 md:w-40 lg:w-64 gap-y-2 ml-[2%]">
        <Link href={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${form?.URL?.data?.attributes?.url}`}>
          <div className="bg-[#efefef] rounded-xl text-xs sm:text-base p-2 px-4 sm:px-6 py-2">
            PDF
          </div>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${form?.WordURL?.data?.attributes?.url}`} download={true}>
          <div className="bg-[#efefef] rounded-xl text-xs sm:text-base p-2 px-4 sm:px-6 py-2">
            Word
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
})}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
