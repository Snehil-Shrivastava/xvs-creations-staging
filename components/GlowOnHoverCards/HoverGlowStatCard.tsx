"use client";

import { useRef, useEffect } from "react";
import styles from "./HoverGlowStatCard.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CardsData } from "@/data/HomePageStatData";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HoverGlowStatCard = () => {
  const cardsContainerRef = useRef(null);
  const cardLayerRef0 = useRef(null);
  const cardLayerRef1 = useRef(null);
  const cardLayerRef2 = useRef(null);
  const cardLayerRef3 = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    if (!cardsContainer) return;

    // @ts-expect-error any event
    const handleMouseMove = (e) => {
      // @ts-expect-error getElement
      const cards = cardsContainer.getElementsByClassName(styles.card);

      for (const card of cards) {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    // @ts-expect-error eventListener
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      // @ts-expect-error eventListener
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const cardLayer0 = cardLayerRef0.current;
    const cardLayer1 = cardLayerRef1.current;
    const cardLayer2 = cardLayerRef2.current;
    const cardLayer3 = cardLayerRef3.current;

    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      tl.to(cardLayer0, {
        scrollTrigger: {
          trigger: cardLayer0,
          start: "top 70%",
          end: "top 60%",
          scrub: 1,
          once: true,
        },
        width: 0,
      });

      tl.to(
        cardLayer1,
        {
          scrollTrigger: {
            trigger: cardLayer1,
            start: "top 70%",
            end: "top 60%",
            scrub: 1,
            once: true,
          },
          width: 0,
        },
        "<"
      );

      tl.to(cardLayer2, {
        scrollTrigger: {
          trigger: cardLayer2,
          start: "top 70%",
          end: "top 60%",
          scrub: 1,
          once: true,
        },
        width: 0,
      });

      tl.to(
        cardLayer3,
        {
          scrollTrigger: {
            trigger: cardLayer3,
            start: "top 70%",
            end: "top 60%",
            scrub: 1,
            once: true,
          },
          width: 0,
        },
        "<"
      );
    });
  });

  return (
    <div
      className={`${styles.bodyContainer} lg:max-xl:mb-[143px] xl:max-1440p:mb-[220px] relative z-[70] mx-auto`}
    >
      <div id="cards" className={styles.cards} ref={cardsContainerRef}>
        {CardsData.map((card, index) => (
          <div
            key={index}
            className={`${styles.cardShadowContainer} relative lg:h-[360px] max-[1024px]:h-[280px] max-[769px]:h-[250px]`}
          >
            <div className={`${styles.card} ${index === 0 ? styles.clipCardFirst : index === 3 ? styles.clipCardLast : ''}`}>
              <div className={styles["card-content"]}>
                <div className="text-left lg:max-xl:pl-[48px] xl:max-1440p:pl-[55px] lg:max-xl:pb-[48px] xl:max-1440p:pb-[55px] mt-auto">
                  <h3
                    className={`font-medium md:max-lg:text-lg lg:max-xl:text-xl xl:max-1440p:text-2xl font-apercu-bold`}
                  >
                    {card.cardTitle}
                  </h3>
                  <h1
                    className={`text-[#F79839] font-bold md:max-lg:text-[4rem]/[5rem] lg:max-xl:text-[5.5rem]/[6rem] xl:max-1440p:text-[6.5rem]/[7rem] font-apercu-black`}
                  >
                    {card.cardStat}
                  </h1>
                  <p
                    className={`text-[#F3EDDE] font-extralight md:max-lg:text-sm xl:max-1440p:text-lg font-apercu-regular`}
                  >
                    {card.cardText1}
                  </p>
                  {card.cardText2 !== "" && (
                    <p
                      className={`text-[#F3EDDE] font-extralight md:max-lg:text-sm xl:max-1440p:text-lg font-apercu-regular`}
                    >
                      {card.cardText2}
                    </p>
                  )}
                  {card.descriptor !== '' && (
                    <p className="text-[#F3EDDE] font-extralight md:max-lg:text-[0.5rem] xl:max-1440p:text-[0.875rem] font-apercu-itallic">
                        {card.descriptor}
                    </p>
                  )}
                </div>
                <div>
                  {card.id === 1 ? <Image src={card.SVGIcon} alt="Icon" className="absolute md:max-lg:top-[2%] top-[10%] md:max-lg:right-0 right-[5%] md:max-lg:scale-60 scale-90" /> : card.SVGIcon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverGlowStatCard;
