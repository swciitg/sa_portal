import React from "react";
import Card from "./EventCard";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";

const Carousel = ({ props }) => {
  const getWindowWidth = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  };

  const isMobile = getWindowWidth() <= 450;

  return (
    <div className="carousel-container">
      <Splide
        options={{
          fixedWidth: isMobile ? 200 : 600,
          perMove: 1,
          autoplay: true,
          gap: 25,
          lazyLoad: "nearby",
          autoWidth: true,
          autoHeight: true,
        }}
      >
        {props.map((prop) => (
          <SplideSlide key={prop?.id}>
            <Card
              image={
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}` +
                prop?.Image?.data[0]?.attributes?.url
              }
              title={prop?.Title}
              icon={
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}` +
                prop?.Icon?.data[0]?.attributes?.url
              }
              description={prop?.description}
              link={prop?.Link}
            />
          </SplideSlide>
        ))}
      </Splide>

      <style jsx>{`
        .carousel-container {
          max-width: 98.5vw;
          overflow: hidden;
          padding: 0 20px;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
