import React from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AutoScrollStrip from "../AutoScrollStrip/AutoScrollStrip";

import './Testimonials.css'

const Testimonials = () => {
  const ClientReviews = [
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
    },
  ];
  return (
    <div className="gallery text-center">
      <Swiper
        style={{
          // @ts-expect-error random
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        initialSlide={1}
        autoplay={{
          delay: 4000,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {ClientReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="text-black flex flex-col md:max-lg:gap-[18px] lg:max-xl:gap-[28px] xl:max-1440p:gap-[32px] md:max-lg:mb-[32px] lg:max-xl:mb-[48px] xl:max-1440p:mb-[52px] md:max-lg:w-[80%] lg:max-xl:w-[70%] xl:max-1440p:w-[75%] mx-auto">
              <h4 className="font-semibold w-full md:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] xl:max-1440p:text-[20px]">
                {`"${review.quote}"`}
              </h4>
              <p className="md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-sm md:max-lg:w-[90px] lg:max-xl:w-[120px] xl:max-1440p:w-[147px] mx-auto">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AutoScrollStrip />
    </div>
  );
};

export default Testimonials;
