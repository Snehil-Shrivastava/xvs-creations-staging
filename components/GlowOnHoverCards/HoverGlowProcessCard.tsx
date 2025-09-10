"use client";

import { JSX, useEffect, useRef } from "react";

import styles from "./HoverGlowProcessCard.module.css";

interface ProcessCardType {
  id: number;
  cardTitle: string;
  cardDesc: string;
  cardIcon: JSX.Element;
}

const HoverGlowProcessCard = ({ card }: { card: ProcessCardType }) => {
  const bodyContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    if (!cardsContainer) return;

    // @ts-expect-error random
    const handleMouseMove = (e) => {
      // @ts-expect-error random
      const cards = cardsContainer.getElementsByClassName(styles.card);

      for (const card of cards) {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    // @ts-expect-error random
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      // @ts-expect-error random
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={bodyContainerRef}
      className={`${styles.bodyContainer} ${
        card.id === 1 ? styles.bodyContainerFirst : styles.bodyContainerLast
      } min-[1906px]:w-[720px] min-[1441px]:max-[1906px]:w-[620px] max-[1441px]:flex-1 max-[1441px]:w-auto max-[1025px]:flex-1 max-[1025px]:w-auto max-[769px]:flex-1 max-[426px]:w-full`}
    >
      <div
        id="cards"
        className={`${styles.cards} h-full`}
        ref={cardsContainerRef}
      >
        <div className={`${styles.cardShadowContainer} h-full`}>
          <div
            className={`${styles.card} ${
              card.id === 1 ? styles.clipCardFirst : styles.clipCardLast
            }`}
          >
            <div className={styles["card-content"]}>
              <div className="text-left py-[48px] mt-auto flex flex-col gap-[48px] max-[1441px]:mt-[0] max-[1025px]:mt-[0] max-[769px]:mt-[0] max-[1025px]:gap-[24px] max-[769px]:gap-[24px] max-[769px]:py-[38px] max-[426px]:py-[12px] max-[426px]:gap-[8px] min-[1905px]:mt-0">
                <div className="flex items-center w-[80%] mx-auto gap-[32px] justify-center max-[426px]:gap-0 max-[769px]:gap-[8px] max-[1025px]:gap-[22px]">
                  {card.cardIcon}
                  <h1 className="text-[64px] font-semibold tracking-wide text-[#F3EDDE] max-[1441px]:text-[4rem] max-[1025px]:text-[2rem] max-[769px]:text-[2.3rem] max-[426px]:text-[1rem]/[2rem]">
                    {card.cardTitle}
                  </h1>
                </div>
                <p className="xl:max-1440p:text-[20px]/[30px] tracking-wider w-[72%] mx-auto font-light text-left">
                  {card.cardDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverGlowProcessCard;
