
import Link from "next/link";
import Image from 'next/image'
function QuickLinks({ prop }) {
  return (
    <div >
      <h1 className="text-black text-3xl mb-4 font-semibold">Quick Links</h1>
      <div className="flex flex-wrap justify-between sm:justify-start">
        {prop.Quick_link.map((link) => (
  <Link
    key={link.id}
    href={link.Link}
    className="w-36 sm:w-40 h-32 bg-lightgray p-2 border-solid rounded-xl shadow-xl flex flex-col items-center justify-center mb-7 mr-4"
  >
    <Image src={`https://swc.iitg.ac.in/saPortal${link.Icon.data.attributes.url}`} width={link.Icon.data.attributes.width} height={link.Icon.data.attributes.height} />
    <span className="text-skyblue text-lg mt-2">{link.Label}</span>
  </Link>
))}

      </div>
    </div>
  );
}

export default QuickLinks;
