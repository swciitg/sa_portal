import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <div className="rounded-[30px] bg-[#1E2532] w-[83vw] flex flex-col items-center justify-evenly  p-3 pr-4 pl-4">
        <div className="w-full flex items-center justify-evenly ">
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
            <Link href="/" className="flex flex-col">
              Home
              {router.pathname == "/" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1"></div>
              )}
            </Link>
            <Link href="/Gymkahana" className="flex flex-col">
              Gymkhana
              {router.pathname == "/Gymkahana" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1"></div>
              )}
            </Link>
            <Link href="/Services" className="flex flex-col">
              Services
              {router.pathname == "/Services" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1 "></div>
              )}
            </Link>
            <Link href="/Rules" className="flex flex-col">
              Rules
              {router.pathname == "/Rules" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1 "></div>
              )}
            </Link>
            <Link href="/Forms" className="flex flex-col">
              Forms
              {router.pathname == "/Forms" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1 "></div>
              )}
            </Link>
            <Link href="/Sacourses" className="flex flex-col">
              SA Courses
              {router.pathname == "/Sacourses" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1 "></div>
              )}
            </Link>
            <Link href="/Events" className="flex flex-col">
              Events
              {router.pathname == "/Events" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1 "></div>
              )}
            </Link>
            <Link href="/Team" className="flex flex-col">
              Team
              {router.pathname == "/Team" ? (
                <div className="h-1 bg-white w-4 rounded-full"></div>
              ) : (
                <div className="h-1 "></div>
              )}
            </Link>
            <div>
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
          <div className="flex flex-col items-center justify-evenly h-4/5">
            <Link href="/">Home</Link>
            <Link href="/Gymkhana">Gymkhana</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Rules">Rules</Link>
            <Link href="/Forms">Forms</Link>
            <Link href="/Sacourses">SA Courses</Link>
            <Link href="/Events">Events</Link>
            <Link href="/Team">Team</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Navbar;
