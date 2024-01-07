import { useState } from "react";
import { useEffect } from "react";
import QuickLinksAndLatestUpdates from "@/components/QuickLinksandLatestUpdates";
import Announcements from "@/components/Annocements";
import FAQ from "@/components/FAQ";
import ImageGallery from "@/components/Home/ImageGallery/ImageGallery";
import Achievements from "@/components/Home/Achievements/Card";
import Carousel from "@/components/Home/Events/Carousel/Carousel";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "400"] });

export default function Home() {
  const [data, setData] = useState(null);

  const getItem = async () => {
    const response = await fetch(`https://swc.iitg.ac.in/saPortal/api/homes?populate=deep`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await response.json();
    setData(json);
    // console.log(json.data[0].attributes.SA_course[0].Image.data[0].attributes.url,"hello");
  }

  useEffect(()=>{
    getItem();
  },[])

  return (
    <>
      {data && (
        <>
          <div className={manrope.className}>
            <div className="w-full flex flex-col justify-center items-center gap-4 p-6 ">
              <div className="w-[83vw]">
                <div className="flex  gap-[20vw]">
                  <div className="flex flex-col">
                    <div className="text-3xl font-semibold">
                      Welcome To The <br />
                      Students Affairs Board
                    </div>
                    <div className="text-sm pt-6">
                      {data.data[0].attributes.About}
                    </div>
                  </div>
                  <div className=" hidden md:flex flex-col p-8 bg-[#FBFBFB] rounded-lg h-fit w-60">
                    <div>
                      <div className="text-gray font-semibold">Content</div>
                    </div>
                    <div className="border-l-2 px-2 text-xs border-gray-400 ">
                      <div ><a href="#QuickLinks">Quick links</a></div>
                      <div className="text-gray"><a href="#Achievements">Achievement</a></div>
                      <div className="text-gray"><a href="#Announcements">Announcement</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[83vw]">
                <div id="QuickLinks">
                <QuickLinksAndLatestUpdates
                  prop={data.data[0].attributes}
                ></QuickLinksAndLatestUpdates>
                </div>
                <div className="flex flex-col w-full md:w-2/3">
                  <div className="text-3xl font-semibold mb-8" id="Achievements">
                    Achievements
                  </div>
                  <div className=" columns-1 md:columns-2">
                   {data.data[0].attributes.Achievements.map((item) => (
  <Achievements key={item.id} props={item}></Achievements>
))}

                  </div>
                  <div id="Announcements">
                  <Announcements prop={data.data[0].attributes} ></Announcements>
                  </div>
                  <FAQ prop={data.data[0].attributes}></FAQ>
                </div>
              </div>
              {/* <Achievements prop={data.data[0].attributes}></Achievements> */}
            </div>
          </div>
          <ImageGallery prop={data.data[0].attributes}></ImageGallery>
            <div className=' py-10 bg-[#1E2532]'>
              <div className='text-2xl sm:text-4xl leading-10 py-6 md:py-8  font-medium  pl-[8%] sm:pl-[10%]   text-[#f6f4f4]'>
            Upcoming Events at IIT Guwahati
        </div>
          <Carousel prop={data.data[0].attributes}></Carousel>
          </div>
        </>
      )}
    </>
  );
}
