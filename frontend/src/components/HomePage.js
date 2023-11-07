import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
const HomePage = () => {
    function handleKeyDown(e) {
        if (e.keycode == 13) {
            e.preventDefault();
            console.log(e.target.value);
        }
    }
    // For toggling menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={`body-font h-screen ${styles.back} ${styles.blur} `}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                     {/* Large Screen View */}
                     <nav className="hidden md:mr-auto md:ml-auto md:flex flex-wrap items-center justify-center font-medium text-xl text-[#FFFFFF] leading-10 transition-all duration-150">
                        <Link href="/" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Home</Link>
                        <Link href="/Gymkhana" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Gymkhana</Link>
                        <Link href="/Services" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Services</Link>
                        <Link href="/Rules" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Rules</Link>
                        <Link href="/Forms" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Forms</Link>
                        <Link href="/SACourses" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">SA Courses</Link>
                        <Link href="/Events" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Events</Link>
                        <Link href="/Team" className="mr-5 lg:mr-16 lg:pr-16 duration-200  hover:text-[#2596BE]  border-[#FFFFFF] border-r-0 lg:border-r-2">Team</Link>
                        <div className={`justify-center flex`}>
                            <form>
                                <label className={`${styles.searchbutton} cursor-pointer`} htmlFor="searchright"><span className={`${styles.mglass} text-2xl p-4 `}>&#9906;</span>
                                    <input className={`${styles.search} text-black  text-xl`} id="searchright" type="search" name="q" placeholder="Search" onKeyDown={handleKeyDown} />
                                </label>
                            </form>
                        </div>
                </nav>
                {/* /Mobile View ---Hamburger Menu */}
                <nav className="flex md:mr-auto md:ml-auto md:hidden flex-wrap items-center justify-center font-medium text-xl text-[#FFFFFF] leading-10 transition-all duration-150">
                    <button className="block md:hidden" onClick={toggleMenu}>
                        <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current text-white">
                            <path
                                fillRule="evenodd"
                                d="M18 4H2a1 1 0 100 2h16a1 1 0 100-2zM18 9H2a1 1 0 100 2h16a1 1 0 100-2zM18 14H2a1 1 0 100 2h16a1 1 0 100-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className={`justify-center flex`}>
                        <form>
                            <label className={`${styles.searchbutton} cursor-pointer`} htmlFor="searchright"><span className={`${styles.mglass} text-2xl p-4 `}>&#9906;</span>
                                <input className={`${styles.search} text-black  text-xl`} id="searchright" type="search" name="q" placeholder="Search" onKeyDown={handleKeyDown} />
                            </label>
                        </form>
                    </div>
                    <div
                        className={`${isOpen ? 'flex' : 'hidden'
                            } flex-col justify-start`}
                    >
                    <Link href="/" className=" lg:mr-16 duration-200  hover:text-[#2596BE]">Home</Link>
                    <Link href="/Gymkhana" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Gymkhana</Link>
                    <Link href="/Services" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Services</Link>
                    <Link href="/Rules" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Rules</Link>
                    <Link href="/Forms" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Forms</Link>
                    <Link href="/SACourses" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">SA Courses</Link>
                    <Link href="/Events" className="mr-5 lg:mr-16 duration-200  hover:text-[#2596BE]">Events</Link>
                    <Link href="/Team" className="mr-5 lg:mr-16 lg:pr-16 duration-200  hover:text-[#2596BE]  border-[#FFFFFF] border-r-0 lg:border-r-2">Team</Link>
                   </div>
                </nav>
            </div>
            {/* Common view in both things starts from here */}
            <div className={`flex flex-col justify-center  items-center  ${isOpen ? 'h-[20vh]': 'h-[65vh]'} `}>
                <div><Image src="/../public/Images/IITG_logo.png"
                    width={120}
                    height={120} alt="Icon not found" /></div>
                    <div   className={`${isOpen ? 'hidden' : 'flex'
                            } flex-col justify-start`} >
                <div className=" font-medium text-2xl tracking-wider leading-9 mt-8 text-center text-white">INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI</div>
                <div className=" font-semibold  text-3xl tracking-tighter leading-6 mt-4 text-center pt-2 text-white">STUDENTS' AFFAIRS</div>
                </div>
            </div>
        </header>
    )
}
export default HomePage;