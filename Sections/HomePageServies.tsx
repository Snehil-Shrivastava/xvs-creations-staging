"use client";

import HoverGlowServicesCard from "@/components/GlowOnHoverCards/HoverGlowServicesCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ServicesBtnSVG from "@/SVGs/ServicesBtnSVG";
import React, { useRef } from "react";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import './Styles/HomePageServices.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cardsData} from "@/data/HomePageServicesData";
import { NavigationOptions } from "swiper/types";

const HomePageServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const loopedCardsData = [...cardsData, ...cardsData];

  return (
    <div>
      <SectionHeading
        heading="SERVICES"
        btnHeading="VIEW SERVICES"
        btnIcon={<ServicesBtnSVG />}
      />
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
          Autoplay,
        ]}
        slidesPerView="auto"
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 600,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            const navigation = swiper.params.navigation as NavigationOptions
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current
          }
        }}
        className="swiper-container"
      >
        {loopedCardsData.map((card, index) => (
          <SwiperSlide key={`${card.id}-${index}`}>
            <HoverGlowServicesCard index={index} card={card} />
          </SwiperSlide>
        ))}
        <div
          ref={prevRef}
          aria-label="Previous Slide"
          className="swiper-button-custom swiper-button-prev-custom"
        >
          <FontAwesomeIcon
            className="max-[769px]:w-[1rem] max-[769px]:h-[1rem] min-[1024px]:w-[1.5rem] min-[1024px]:h-[1.5rem]"
            icon={faArrowLeft}
          />
        </div>
        <div
          ref={nextRef}
          aria-label="Next Slide"
          className="swiper-button-custom swiper-button-next-custom"
        >
          <FontAwesomeIcon
            className="max-[769px]:w-[1rem] max-[769px]:h-[1rem] min-[1024px]:w-[1.5rem] min-[1024px]:h-[1.5rem]"
            icon={faArrowRight}
          />
        </div>
      </Swiper>
    </div>
  );
};

export default HomePageServices;
