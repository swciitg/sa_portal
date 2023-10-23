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
      <div className={`flex h-32 bg-[#101323] items-center pt-10 `}>
        <div className="flex" style={{ width: `5%` }}></div>
        <div className="flex items-center" style={{ width: `58%` }}>
          <Image
            src="/images/IITG_Logo_svg.svg"
            width={1}
            height={1}
            className="flex lg:w-20 md:w-16 md:h-16 lg:h-20 h-14 w-14 p-1"
          />
          <div className="flex flex-col h-14 px-3">
            <div
              style={{
                color: `white`,
                // fontSize: `1.5vw`,
                fontFamily: `manrope`,
                fontWeight: `500`,
                letterSpacing: `0.025rem`,
                // lineHeight: `2rem`,
              }}
              className="lg:text-[22px] md:text-[17px] text-[15px] lg:mt-1 lg:mb-0 md:mb-0.5 md:mt-1.5 mt-2.5 mb-0"
            >
              Student Affairs IITG
            </div>
            <div
              style={{
                color: `white`,
                fontWeight: `100`,
                // fontSize: `0.9vw`,
                fontFamily: `manrope`,
                letterSpacing: `0.025rem`,
              }}
              className="lg:text-[13px] md:text-[10px] text-[9px]"
            >
              Admin Building, IITG
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col h-14 text-white ${manrope.className} lg:text-[17px] md:text-[14px] text-[12px] lg:mt-0 md:mt-0 mt-3`}
          style={{ width: `19 %` }}
        >
          Get Connected
          <div className="flex flex-row mt-1">
            <Image
              src="/icons/Twitter.svg"
              width={1}
              height={1}
              className="flex lg:w-7 lg:h-7 md:w-6 md:h-6 w-4 h-4  md:mr-5 mr-3 "
            />
            <Image
              src="/icons/Linkedin.svg"
              width={1}
              height={1}
              className="flex lg:w-7 lg:h-7 md:w-6 md:h-6 h-4 w-4 md:p-0.5"
            />
          </div>
        </div>
        <div
          className={`flex flex-col h-14 lg:mt-0 md:mt-0 mt-3`}
          style={{ width: `15%` }}
        >
          <div
            className={` text-white ${manrope.className} lg:text-[17px] md:text-[14px] text-[12px]`}
          >
            Contact
          </div>
          <div
            style={{
              color: `rgba(255, 255, 255, 0.80)`,
              fontWeight: `50`,
              // fontSize: `0.8rem`,
              fontFamily: `manrope`,
              letterSpacing: `0.025rem`,
            }}
            className="lg:text-[14px] md:text-[12px] text-[10px] mt-0.4"
          >
            4553678654
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-[#101323] h-16 items-center">
        <div style={{ width: `6%` }}></div>
        <div className="flex">
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
