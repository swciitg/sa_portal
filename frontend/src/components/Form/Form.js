import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "500"] });

const Form = () => {
  //dummy data
  const [data, setData] = useState([
    {
      Name: "Hostel",
      forms: [
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
      ],
    },
    {
      Name: "Appication",
      forms: [
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Information from Quarantine",
          date: "23/3/23",
        },
      ],
    },
    {
      Name: "Gym",
      forms: [
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
        {
          type: "Hostel",
          heading: "Release Information from Quarantine",
          date: "23/3/23",
        },
      ],
    },
  ]);
  //active tab
  const [activeTab, setActiveTab] = useState(0);
  const handletabchange = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className={manrope.className}>
        <div className="flex flex-col w-full gap-8 items-center py-6">
          <div className="flex flex-wrap w-[80%] gap-6 text-xs">
            {data.map((item, index) => {
              return (
                <button
                  key={item.Name}
                  className={`${
                    index == activeTab ? "bg-[#1e2532] text-white" : "bg-white"
                  } ${"p-2 flex items-center justify-center w-24 shadow-lg rounded-xl box-border"}`}
                  onClick={() => handletabchange(index)}
                >
                  {item.Name}
                </button>
              );
            })}
          </div>
          <div className="w-[80%]">
            {data.map((item, index) => {
              return (
                <div
                  key={item.Name}
                  className={`${
                    index == activeTab ? "block" : "hidden"
                  } ${"flex flex-col gap-4 w-full"}`}
                >
                  {item.forms.map((form) => {
                    return (
                      <div className=" flex shadow-md rounded-xl w-full bg-[#FCFCFD]   px-1 py-4 box-border font-medium sm:p-6">
                        <div className="flex flex-col items-center justify-center px-2 box-border border-r-2 border-[#1e2532]">
                          <div className="text-xs sm:text-base">
                            {form.type}
                          </div>
                          <div className="text-xs">{form.date}</div>
                        </div>
                        <div className="flex justify-between  w-full px-4 box-border items-center sm:pl-8">
                          <div className="text-xs sm:text-lg">
                            {form.heading}
                          </div>
                          <div className="bg-[#efefef]  rounded-xl text-xs sm:text-base  p-2 sm:px-6 py-2">
                            PDF
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
