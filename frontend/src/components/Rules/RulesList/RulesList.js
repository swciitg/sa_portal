import React, { useState } from "react";
import RulesListCard from "./RulesListCard";


const Form = () => {
  //dummy data
  const [data, setData] = useState([
    {
      Name: "All",
      forms: [
        {
         header : "HAB Constitution",
         link : ""
        },
        {
          header : "Students' Welfare Fund (STAF, SCF, SCAF)",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60efb0bfd676b1f931f237f1"
        },
        {
          header : "Swimming Pool Rules",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60efb02ed676b1f931f237ef"
        },
        {
          header : "Inter IIT Sports Meet",
          link : ""
        },
        {
          header : "Ordinance and Rules on Scholarship",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60f0121ec146ef0840a54ac5"
        },
        {
          header : " Ordinance On Code and Conduct of Students",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60f00eddd676b1f931f23814"
        },
        {
          header : "Students' Brotherhood Fund",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60efb076d676b1f931f237f0"
        },
        {
          header : "HAB Procedures and Resolutions",
          link : ""
        }    
      ]
    },
    {
      Name: "Hostel",
      forms: [
        {
          header : "HAB Constitution",
          link : ""
         },
         {
          header : "HAB Procedures and ordinances",
          link : ""
        },
        {
          header : "HAB Procedures and ordinances",
          link : ""
        },
        {
          header : "HAB Procedures and ordinances",
          link : ""
        }
      ],
    },
    {
      Name: "Academics",
      forms: [
         {
           header : " Ordinance On Code and Conduct of Students",
           link : "https://intranet.iitg.ac.in/sa/api/rules/60f00eddd676b1f931f23814"
         }
      ],
    },
    {
      Name: "Scholarship",
      forms: [
         {
           header : "Ordinance and Rules on Scholarship",
           link : "https://intranet.iitg.ac.in/sa/api/rules/60f0121ec146ef0840a54ac5"
         }
      ],
    },
    {
      Name: "Sports",
      forms: [
         {
           header : "Inter IIT Sports Meet",
           link : ""
         },
         {
          header : "Swimming Pool Rules",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60efb02ed676b1f931f237ef"
          },
          {
            header : "Swimming Pool Rules",
            link : "https://intranet.iitg.ac.in/sa/api/rules/60efb02ed676b1f931f237ef"
          },
      ],
    },
    {
      Name: "Funds",
      forms: [
        {
          header : "Students' Brotherhood Fund",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60efb076d676b1f931f237f0"
        },
        {
          header : "Students' Welfare Fund (STAF, SCF, SCAF)",
          link : "https://intranet.iitg.ac.in/sa/api/rules/60efb0bfd676b1f931f237f1"
        }
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
      <div className='font-Manrope'>
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
                  } ${"flex flex-col gap-3 w-full"}`}
                >
                  {item.forms.map((form,key) => {
                    return (
                      <RulesListCard key={key} num={key+1} header={form.header}/>
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