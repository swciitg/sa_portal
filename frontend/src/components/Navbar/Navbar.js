import Link from "next/link";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import Query from "../Query/Query";
const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });
const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className={manrope.className}>
      <div className="w-full flex justify-center items-center gap-4 p-6 ">
        <div className="drop-shadow-lg rounded-full bg-[#1E2532] w-[83vw] flex flex-col items-center justify-evenly  p-4 pr-4 pl-4">
          <div className="w-full flex items-center justify-evenly transition ease-in delay-150">
            {/* Mobile Hamburger Icon */}
            <Image
              src="/icons/hamburger.svg"
              width={32}
              height={32}
              className="md:hidden"
              onClick={() => {
                setHamburger(!hamburger);
              }}
            />
            <div
              className={
                search
                  ? "hidden"
                  : "flex items-center w-10/12 justify-start md:hidden "
              }
            ></div>
            <div
              className={
                search
                  ? "hidden"
                  : "hidden md:flex items-center w-10/12 justify-between"
              }
            >
              {/* If link href matches current path underline pill will be on the link */}
              {/* Change href and router.pathname comparator value to the same */}
              <Link
                href="/"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Home
                {router.pathname == "/" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1"></div>
                )}
              </Link>
              <Link
                href="/gymkhana"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Gymkhana
                {router.pathname == "/gymkhana" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1"></div>
                )}
              </Link>
              <Link
                href="/services"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Services
                {router.pathname == "/services" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1 "></div>
                )}
              </Link>
              <Link
                href="/rules"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Rules
                {router.pathname == "/rules" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1 "></div>
                )}
              </Link>
              <Link
                href="/forms"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Forms
                {router.pathname == "/forms" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1 "></div>
                )}
              </Link>
              <Link
                href="/sacourses"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                SA Courses
                {router.pathname == "/sacourses" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1 "></div>
                )}
              </Link>
              <Link
                href="/events"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Events
                {router.pathname == "/events" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1 "></div>
                )}
              </Link>
              <Link
                href="/team"
                className="flex flex-col text-white hover:text-[#afb5d9]"
              >
                Team
                {router.pathname == "/team" ? (
                  <div className="h-1 bg-white w-4 rounded-full"></div>
                ) : (
                  <div className="h-1 "></div>
                )}
              </Link>
              <div className="text-white">
                |<div className="h-1"></div>
              </div>
            </div>
            {/* Search Section */}
            <div
              className={
                search ? "flex justify-end w-10/12 items-center " : "hidden"
              }
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="bg-[#1E2532] outline-none border-b-2 w-2/5 min-w-[128px] max-w-[256px]"
              />
            </div>
            <div>
              <Image
                src="/icons/Search.svg"
                width={24}
                height={24}
                onClick={() => {
                  setSearch(!search);
                }}
              ></Image>
              <div className="h-1"></div>
            </div>
          </div>
        </div>
        {/* Mobile Responsive View */}
        {hamburger ? (
          <div className="absolute top-0 w-screen h-screen flex flex-col bg-[#1E2532] items-center p-2">
            <div className="flex w-screen justify-end p-2">
              <Image
                src="/icons/cross.png"
                width={32}
                height={32}
                className="w-[7vw] h-[7vw]"
                onClick={() => {
                  setHamburger(!hamburger);
                }}
              ></Image>
            </div>
            <div className="flex flex-col items-center justify-evenly h-4/5 text-white">
              <Link href="/">Home</Link>
              <Link href="/gymkhana">Gymkhana</Link>
              <Link href="/services">Services</Link>
              <Link href="/rules">Rules</Link>
              <Link href="/forms">Forms</Link>
              <Link href="/sacourses">SA Courses</Link>
              <Link href="/events">Events</Link>
              <Link href="/team">Team</Link>
            </div>
          </div>
        ) : (
          <></>
        )}
        <Query />
      </div>
    </div>
  );
};
export default Navbar;
