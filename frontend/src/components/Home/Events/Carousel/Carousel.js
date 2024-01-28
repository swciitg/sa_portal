import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Card from "../CarouselCard/Card";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// sample data
const data = {
  details: {
    imgUrl: "https://picsum.photos/200/300",
    redirectUrl: "/hello",
    info: "IIT Guwahati Students build a car that can go from 0-60 Km/hr in 6s",
    date: "12 December 2020",
  },
};

const Carousel = ({ prop }) => {
  const swiper = useSwiper();
  SwiperCore.use(Autoplay);
console.log(prop.Event_Gallery)
  return (
    <div className="p-8">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex flex-col"
      >
        {prop.Event_Gallery.map((item) => (
  <SwiperSlide key={item.id}>
    <Card data={item} />
  </SwiperSlide>
))}

      </Swiper>

      <div className="flex justify-center align-middle mt-3">
        <div className="flex p-2 rounded-full">
          <Image
            src="/saportal/icons/left.svg"
            width={1}
            height={1}
            className="flex w-8 h-8 button-prev-slide"
          />
        </div>
        <div className="flex p-2 rounded-full">
          <Image
            src="/saportal/icons/right.svg"
            width={1}
            height={1}
            className="flex w-8 h-8 button-next-slide"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
