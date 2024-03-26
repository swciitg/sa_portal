import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Announcement({ prop }) {
  const [opt, setopt] = useState("options");
  const [isVisible, setIsVisibile] = useState(5);
  const [allData, setAllData] = useState(false);

  const handleShowMore = () => {
    setIsVisibile((count) => count + 5);
    if (isVisible + 5 >= prop?.Announcements.length) {
      setAllData(true);
    }
  };

  const handleShowLess = () => {
    setIsVisibile(5);
    setAllData(false);
  };

  return (
    <>
      <div
        className=" w-full flex flex-wrap  mr-10 mt-5 py-4 md:py-8 "
        style={{ justifyContent: "space-between" }}
      >
        <p className="text-3xl text-darkblue font-semibold">Announcements</p>
        {/* <Menu as="div" className="relative inline-block text-left mt-2 sm:mt-0">
          <div>
            <Menu.Button className="inline-flex border-none w-full justify-center gap-x-1.5 rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm   hover:bg-gray-50">
              {opt}
              <IoIosArrowDown
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setopt("Important")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Important
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setopt("Latest")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Latest
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setopt("Old")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Old
                    </button>
                  )}
                </Menu.Item> */}
        {/* </div>
            </Menu.Items>
          </Transition>
        </Menu> */}
      </div>
      {prop?.Announcements.slice(0, isVisible).map((item) => {
        return (
          <div
            key={item.id}
            className="flex justify-between items-center w-full rounded-3xl shadow-xl px-8 py-3 border-solid mb-[10px]"
            style={{
              "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "rgba(252, 252, 253, 1)",
            }}
          >
            <div className="col-start-2 col-end-9">
              <p className="pl-3 pt-3 text-md tracking-wide">
                {item.Date.substr(0, 10)}
              </p>
              <p className="px-3 py-2 text-md font-semibold break-all tracking-wide">
                {item.Heading}
              </p>
            </div>
            <div className="flex col-start-10 col-end-12 text-2xl">
              <button className="inline-block align-middle">
                <Link href={item.Link} className="text-darkblue">
                  <BsFillArrowRightSquareFill className="rounded-lg" />
                </Link>
              </button>
            </div>
          </div>
        );
      })}
      {prop?.Announcements.length > isVisible && (
        <div className="flex justify-end">
          {!allData ? (
            <button
              onClick={handleShowMore}
              className="mt-4 mr-4 text-black font-bold py-2 px-4 rounded"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="mt-4 mr-4 text-black font-bold py-2 px-4 rounded"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </>
  );
}
