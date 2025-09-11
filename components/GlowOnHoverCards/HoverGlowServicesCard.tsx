"use client";

import { useEffect, useRef } from "react";
import styles from "./HoverGlowServicesCard.module.css";
import Image, { StaticImageData } from "next/image";

type ServicesCardType = {
  id: number;
  cardTitle: string;
  cardDesc: string;
  cardGif: StaticImageData;
};

const HoverGlowServicesCard = ({
  index,
  card,
}: {
  index: number;
  card: ServicesCardType;
}) => {
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
    <div className={`${styles.bodyContainer} body-container`}>
      <div
        id="cards"
        className={`${styles.cards} relative cards-container`}
        ref={cardsContainerRef}
      >
        <div
          key={index}
          className={`${styles.cardShadowContainer} relative h-full backdrop-blur-sm`}
        >
          <div className={`${styles.card} backdrop-blur-sm`}>
            <div className={styles["card-content"]}></div>
          </div>
        </div>
        <div className="text-center xl:max-1440p:w-[60%] mx-auto lg:max-xl:pb-[48px] xl:max-1440p:pb-[56px] mt-auto flex flex-col lg:max-xl:gap-[8px] xl:max-1440p:gap-[12px] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <h3 className="font-bold lg:max-xl:text-5xl xl:max-1440p:text-6xl font-apercu-black">
            {card.cardTitle} {index}
          </h3>
          <p className="font-light lg:max-xl:text-sm xl:max-1440p:text-sm mx-auto font-apercu-regular">
            {card.cardDesc}
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container">
          <div className="">
            {card.id === 1 ? (
              <Image
                src={card.cardGif}
                alt="icon"
                className="scale-[2] absolute -top-[1rem] max-[769px]:top-[-2rem]"
                priority={true}
                unoptimized={true}
              />
            ) : (
              <Image
                src={card.cardGif}
                alt="icon"
                className="scale-[1.2] absolute -top-[6rem]"
                priority={true}
                unoptimized={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverGlowServicesCard;
