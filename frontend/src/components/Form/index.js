import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "500"] });

const Form = () => {
  //dummy data
  const [data, setData] = useState(null);

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/forms?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    
    setData(json.data);
    console.log(data);
    // console.log(json.data[0].attributes.SA_course[0].Image.data[0].attributes.url,"hello");
  }

  useEffect(()=>{
    getItem();
  },[])
  //active tab
  data&&data.map((item,index)=>{
    console.log(item.attributes.Forms[0],"item");

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
                  } ${"p-2 flex items-center justify-center w-24 shadow-lg rounded-xl box-border"}`}
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
                      <div className=" flex shadow-md rounded-xl w-full bg-[#FCFCFD]   px-1 py-4 box-border font-medium sm:p-6">
                        <div className="flex flex-col items-center justify-center px-2 box-border border-r-2 border-[#1e2532]">
                          <div className="text-xs sm:text-base">
                            {item.attributes.Name}
                          </div>
                          <div className="text-xs">{form.Date}</div>
                        </div>
                        <div className="flex justify-between  w-full px-4 box-border items-center sm:pl-8">
                          <div className="text-xs sm:text-lg">
                            {form.Header}
                          </div>
                          <Link href={`https://intranet.iitg.ac.in/sa/api/rules/`+ `${form.URL}`}>
                          <div className="bg-[#efefef]  rounded-xl text-xs sm:text-base  p-2 sm:px-6 py-2">
                            PDF
                          </div>
                          </Link>
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
