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
  return (
    <>
      <div
        className=" w-full flex  mr-10 mt-5"
        style={{ justifyContent: "space-between" }}
      >
        <p className="text-3xl lg:text-4xl text-darkblue">Announcements</p>
        <Menu as="div" className="relative inline-block text-left">
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
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {prop.Announcements.map((item) => {
        return (
          <div className="flex grid w-full rounded-3xl shadow-xl  p-3 border-solid">
            <div className="col-start-2 col-end-9">
              <p className="ps-3 pl-3 pt-3 text-md">{item.Date}</p>
              <p className="p-3 text-sm font-semibold break-all  ">
                {item.Heading}
              </p>
            </div>
            <div className="flex col-start-10 col-end-12 text-2xl">
              <button className="inline-block allign-middle">
                <Link href={item.Link} className="text-darkblue">
                  <BsFillArrowRightSquareFill className="rounded-lg" />
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
