
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
    className="w-36 sm:w-40 h-32 bg-lightgray border-solid rounded-xl shadow-xl flex flex-col items-center justify-center mb-7 mr-4 p-2"
    style={{"box-shadow" : "rgba(0, 0, 0, 0.24) 0px 3px 8px","backgroundColor":"rgba(252, 252, 253, 1)"}}
  >
    <Image src={`https://swc.iitg.ac.in/sa_portal_backend${link.Icon.data.attributes.url}`} width="125" height="120" className="rounded-md object-cover" />
    <span className="text-skyblue text-sm font-semibold mt-1">{link.Label}</span>
  </Link>
))}

      </div>
    </div>
  );
}

export default QuickLinks;
