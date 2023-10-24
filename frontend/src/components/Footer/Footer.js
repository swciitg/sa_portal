import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { Manrope } from "next/font/google";

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col md:h-32 h-48  bg-[#101323] md:items-center md:pt-10 pt-5 `}
        style={{ overflow: `hidden` }}
      >
        <div className="flex items-center ml-6 md:ml-14 lg:ml-16 md:w-7/12 w-full">
          <Image
            src="/images/IITG_Logo_svg.svg"
            width={1}
            height={1}
            className="flex lg:w-20 md:w-16 md:h-16 lg:h-20 h-20 w-20 p-1"
          />
          <div className="flex flex-col h-14 px-3">
            <div
              style={{
                color: `white`,
                fontFamily: `manrope`,
                fontWeight: `500`,
                letterSpacing: `0.025rem`
              }}
              className="lg:text-[22px] md:text-[17px] text-[22px] lg:mt-1 lg:mb-0 md:mb-0.5 md:mt-1.5 mt-1 mb-0"
            >
              Student Affairs IITG
            </div>
            <div
              style={{
                color: `white`,
                fontWeight: `100`,
                fontFamily: `manrope`,
                letterSpacing: `0.025rem`
              }}
              className="lg:text-[13px] md:text-[10px] text-[13px]"
            >
              Admin Building, IITG
            </div>
          </div>
        </div>
        <div className="flex flex-row md:w-4/12  w-full md:ml-0 ml-5 md:mt-0 mt-2">
          <div
            className={`flex flex-col h-14 text-white ${manrope.className} lg:text-[17px] md:text-[14px] text-[17px] lg:mt-0 md:mt-0 mt-3 md:ml-0 ml-5`}
            style={{ width: `50%` }}
          >
            Get Connected
            <div className="flex flex-row mt-1">
              <Image
                src="/icons/Twitter.svg"
                width={1}
                height={1}
                className="flex lg:w-7 lg:h-7 md:w-6 md:h-6 w-7 h-7  md:mr-5 mr-3 "
              />
              <Image
                src="/icons/Linkedin.svg"
                width={1}
                height={1}
                className="flex lg:w-7 lg:h-7 md:w-6 md:h-6 h-7 w-7 md:p-0.5 p-1"
              />
            </div>
          </div>
          <div
            className={`flex flex-col h-14 lg:mt-0 md:mt-0 mt-3 md:ml-0 ml-10`}
            style={{ width: `50%` }}
          >
            <div
              className={` text-white ${manrope.className} lg:text-[17px] md:text-[14px] text-[17px]`}
            >
              Contact
            </div>
            <div
              style={{
                color: `rgba(255, 255, 255, 0.80)`,
                fontWeight: `50`,
                fontFamily: `manrope`,
                letterSpacing: `0.025rem`,
              }}
              className="lg:text-[14px] md:text-[12px] text-[14px] mt-0.4"
            >
              4553678654
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-[#101323] h-16 items-center">
        <div className="flex lg:ml-20 md:ml-16 ml-10">
          <Image
            src="/icons/SWC_Logo.svg"
            width={1}
            height={1}
            className="flex md:h-6 md:w-6 h-5 w-5"
          />
          <div
            className={`flex ${redhat.className}  text-gray pl-3 items-center mt-0.5 text-[12px] md:text-[15px]`}
          >
            ©2023
          </div>
          <div
            className={`flex ${redhat.className} text-gray pl-3 items-center text-[12px] md:text-[15px]`}
          >
            @students-web-committee
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
