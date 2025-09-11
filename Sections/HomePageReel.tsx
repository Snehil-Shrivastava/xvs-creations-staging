"use client";

import styles from "./Styles/HomePageReel.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePageReel = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;

    gsap.set(container, { scale: 0, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(container, {
      opacity: 1,
      scale: 1,
      transformOrigin: "center center",
      duration: 1.2,
    });
  });

  return (
    <div
      ref={containerRef}
      className="lg:max-xl:h-[460px] xl:max-1440p:h-[520px] mb-[143px] mt-[143px] relative z-[70]"
    >
      <div
        className={`h-full bg-black ${styles.reelImg} mx-auto max-[769px]:w-19/20`}
      >

      </div>
    </div>
  );
};

export default HomePageReel;
