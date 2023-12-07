import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import ImageCard from "./ImageCard";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// sample data
const data = {
  details: {
    imgUrl: "https://picsum.photos/200/300",
  },
};

const ImageGallery = ({ prop }) => {
  const swiper = useSwiper();
  SwiperCore.use(Autoplay);
console.log(prop)
  return (
    <div className="p-8">
      <Swiper
        className=""
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 10,
          },
          // when window width is >= 320px
          425: {
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            loop: true,
            centeredSlides: true,
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // when window width is >= 1280px
          1280: {
            loop: true,
            centeredSlides: true,
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {prop.Image_Gallery.map((item) => (
          <SwiperSlide>
            <ImageCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center align-middle mt-3">
        <div className="flex p-2 rounded-full">
          <Image
            src="/icons/left.svg"
            width={1}
            height={1}
            className="flex w-8 h-8 button-prev-slide"
          />
        </div>
        <div className="flex p-2 rounded-full">
          <Image
            src="/icons/right.svg"
            width={1}
            height={1}
            className="flex w-8 h-8 button-next-slide"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
