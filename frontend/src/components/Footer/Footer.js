import Image from "next/image";
import { Raleway } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500"],
});

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300"],
});

const Footer = () => {
  return (
    <>
      <div className="flex h-16 bg-black items-center px-52">
        <Image src="/icons/logo.svg" width={40} height={40} />
        <div className={`${raleway.className} text-sm text-white ml-3 mr-5   `}>
          IITG Hostel Affairs Board
        </div>
        <div
          className={`${redhat.className} border-l-2 border-gray text-gray pl-6`}
        >
          @2021
        </div>
        <div className={`${redhat.className} text-gray pl-3`}>
          @students-web-committee
        </div>
      </div>
    </>
  );
};
export default Footer;
