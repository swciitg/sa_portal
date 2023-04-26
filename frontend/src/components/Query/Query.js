import Image from "next/image";
import { useState } from "react";
const Query = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      {/* Query button */}
      <div
        className="h-[52px]  w-[52px]  p-2 rounded-full bg-[#1E2532] flex items-center justify-center"
        onClick={() => setPopup(!popup)}
      >
        <Image
          src="/icons/Query.svg"
          width={20}
          height={20}
          // className="w-4/5 h-4/5"
        ></Image>
      </div>
      {/* Query Button Ends */}
      {/* Query Form */}
      <div
        className={
          popup
            ? "flex absolute right-[5.5vw] w-[50vw] min-w-[250px] top-24 flex-col p-[2vw] bg-white text-black rounded-xl"
            : "hidden"
        }
      >
        <div className="text-xl font-semibold mb-[3vh]">
          Have a query? Drop us a line:
        </div>
        <form
          action=""
          method="post"
          className="flex flex-col justify-evenly text-sm"
        >
          <div className="flex flex-col mb-[1vw]">
            <label htmlFor="name" className="font-semibold">
              Your Name
            </label>
            <input
              name="name"
              className="bg-[#F9F9F9] rounded-lg p-2 shadow-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="flex justify-between mb-[1vw]">
            <div className="flex flex-col w-[48%] ">
              <label htmlFor="name" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-[#F9F9F9] rounded-lg p-2 shadow-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="name" className="font-semibold">
                Subject
              </label>
              <select
                name="name"
                className="bg-[#F9F9F9] rounded-lg p-2 shadow-gray-300 shadow-sm"
                required
              >
                <option>Academic</option>
                <option>Hostel</option>
                <option>Scholarship</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-[2vw]">
            <label htmlFor="name" className="font-semibold">
              Description
            </label>
            <input
              name="name"
              className="bg-[#F9F9F9] rounded-lg p-2 shadow-gray-300 shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#1E2532] text-white rounded-lg w-fit p-2 flex items-center justify-evenly"
          >
            <div>Submit</div>
            <Image
              src="icon/arrow.svg"
              width={6}
              height={6}
              className="ml-2"
            ></Image>
          </button>
        </form>
      </div>
      {/* Form ends */}
    </>
  );
};
export default Query;
