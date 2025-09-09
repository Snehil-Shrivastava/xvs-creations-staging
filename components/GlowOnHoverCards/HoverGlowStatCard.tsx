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
      className={`${styles.bodyContainer} min-[1906px]:w-4/5 min-[1906px]:mx-auto min-[1536px]:max-[1906px]:w-9/10 min-[1536px]:max-[1906px]:mx-auto lg:mb-[220px] max-[1024px]:mb-[143px] max-[426px]:mb-[5rem] relative z-[70] mx-auto max-[769px]:w-19/20`}
    >
      <div id="cards" className={styles.cards} ref={cardsContainerRef}>
        {CardsData.map((card, index) => (
          <div
            key={index}
            className={`${styles.cardShadowContainer} relative lg:h-[360px] max-[1024px]:h-[280px] max-[769px]:h-[250px]`}
          >
            <div className={`${styles.card} ${index === 0 ? styles.clipCardFirst : index === 3 ? styles.clipCardLast : ''}`}>
              <div className={styles["card-content"]}>
                <div className="text-left 2xl:pl-[75px] 2xl:pb-[56px] xl:pl-[55px] xl:pb-[55px] lg:pl-[35px] lg:pb-[35px] max-[1024px]:pl-[12px] max-[1024px]:pb-[12px] mt-auto max-[426px]:mt-[5rem] max-[426px]:pl-[2rem] max-[426px]:pb-[2rem]">
                  <h3
                    className={`font-medium text-2xl max-[1024px]:text-[1rem] max-[426px]:text-[0.75rem] font-apercu-bold`}
                  >
                    {card.cardTitle}
                  </h3>
                  <h1
                    className={`text-[#F79839] font-bold 2xl:text-[5.75rem] xl:text-[6.5rem]/[7rem] lg:text-[4rem] max-[1024px]:text-[3.6rem] font-apercu-black`}
                  >
                    {card.cardStat}
                  </h1>
                  <p
                    className={`text-[#F3EDDE] font-extralight text-lg max-[1024px]:text-[0.75rem] max-[426px]:text-[0.5625rem] font-apercu-regular`}
                  >
                    {card.cardText1}
                  </p>
                  {card.cardText2 !== "" && (
                    <p
                      className={`text-[#F3EDDE] font-extralight text-lg max-[1024px]:text-[0.75rem] max-[426px]:text-[0.5625rem] font-apercu-regular`}
                    >
                      {card.cardText2}
                    </p>
                  )}
                  {card.descriptor !== '' && (
                    <p className="text-[#F3EDDE] font-extralight text-[0.875rem] font-apercu-itallic">
                        {card.descriptor}
                    </p>
                  )}
                </div>
                <div>
                  {card.id === 1 ? <Image src={card.SVGIcon} alt="Icon" className="absolute top-[15%] right-[10%] scale-110" /> : card.SVGIcon}
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
