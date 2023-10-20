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
        <div className="flex items-center" style={{ width: `60%` }}>
          <Image
            src="/images/IITG_Logo_svg.svg"
            width={1}
            height={1}
            className="flex w-20 h-20 p-1"
          />
          <div className="flex flex-col h-14 px-3">
            <div
              style={{
                color: `white`,
                fontSize: `1.5rem`,
                fontFamily: `manrope`,
                fontWeight: `500`,
                letterSpacing: `0.025rem`,
                lineHeight: `2rem`,
              }}
            >
              Student Affairs IITG
            </div>
            <div
              style={{
                color: `white`,
                fontWeight: `100`,
                fontSize: `0.8rem`,
                fontFamily: `manrope`,
                letterSpacing: `0.025rem`,
              }}
            >
              Admin Building, IITG
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col h-14 text-white ${manrope.className}`}
          style={{ width: `15%` }}
        >
          Get Connected
          <div className="flex flex-row mt-1">
            <Image
              src="/icons/Twitter.svg"
              width={1}
              height={1}
              className="flex w-7 h-7 mr-3"
            />
            <Image
              src="/icons/Linkedin.svg"
              width={1}
              height={1}
              className="flex w-7 h-7 p-1"
            />
          </div>
        </div>
        <div className={`flex flex-col h-14`} style={{ width: `15%` }}>
          <div className={` text-white ${manrope.className}`}>Contact</div>
          <div
            style={{
              color: `rgba(255, 255, 255, 0.80)`,
              fontWeight: `50`,
              fontSize: `0.8rem`,
              fontFamily: `manrope`,
              letterSpacing: `0.025rem`,
            }}
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
            className="flex h-6 w-6"
          />
          <div
            className={`flex ${redhat.className}  text-gray pl-3 items-center mt-0.5`}
            style={{ fontSize: `0.9rem` }}
          >
            ©2023
          </div>
          <div
            className={`flex ${redhat.className} text-gray pl-3 items-center`}
            style={{ fontSize: `0.9rem` }}
          >
            @students-web-committee
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
