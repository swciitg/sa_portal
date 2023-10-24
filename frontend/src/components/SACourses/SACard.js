import React from 'react';
import styles from './SACard.module.css'
export default function SACard() {
      const id=1;
      const title="SA Courses";
  return (
    <>
  <div className={`w-4/5 sm:w-4/6 md:w-3/5 h-64 flex items-end mx-auto  sm:ml-2 mt-2 ${styles.back}`}>
  <div className=" px-4 py-4 text-lg text-white rounded-b-lg bg-[#252525B2] w-full flex">
           <div className="pr-6 border-r-2 border-color-white">{id}</div>
            <div className="pl-4">{title}</div>
  </div>
</div>
    </>
  )
}
