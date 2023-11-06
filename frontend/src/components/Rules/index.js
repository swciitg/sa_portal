import React, { useEffect, useState } from "react";
import RulesListCard from "./RulesListCard";


const RulesList = () => {
  const [data, setData] = useState([]);

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/rules?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    setData(json.data);
  }

  useEffect(()=>{
    getItem();
  },[])
  //active tab
  const [activeTab, setActiveTab] = useState(0);
  const handletabchange = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="my-4">
      <div className='min-h-[274px] font-Manrope'>
        <div className="flex flex-col w-full gap-8 items-center py-2">
          <div className="flex flex-wrap w-[80%] gap-6 text-xs py-2">
            {
              data.length
              ?
              data.map((item, index) => {
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
              })
            :
            ""}
          </div>
          <div className="w-[80%]">
            {
              data.length
              ?
              data.map((item, index) => {
              return (
                <div
                  key={item.attributes.Name}
                  className={`${
                    index == activeTab ? "block" : "hidden"
                  } ${"flex flex-col gap-3 w-full"}`}
                >
                  {item.attributes.Rules.map((form,key) => {
                    return (
                      <RulesListCard key={key} num={key+1} header={form.Header} link={form.URL}/>
                    );
                  })}
                </div>
              );
            }):""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesList;