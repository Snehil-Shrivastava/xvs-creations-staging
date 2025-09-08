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
      className="min-[2560px]:h-[820px] min-[2560px]:w-4/5 min-[1536px]:w-9/10 min-[1536px]:mx-auto min-[1536px]:h-[680px] min-[1280px]:h-[520px] mb-[143px] mt-[143px] max-[1024px]:mt-[50px] relative max-[426px]:mb-[5rem] z-[70]"
    >
      <div
        className={`h-full bg-black ${styles.reelImg} mx-auto max-[769px]:h-[347px] max-[769px]:w-19/20 max-[426px]:h-[180px]`}
      >

      </div>
    </div>
  );
};

export default HomePageReel;
