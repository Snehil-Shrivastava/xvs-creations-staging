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
    <div className={`${styles.bodyContainer}`}>
      <div id="cards" className={`${styles.cards} relative`} ref={cardsContainerRef}>
        <div
          key={index}
          className={`${styles.cardShadowContainer} relative h-full backdrop-blur-sm`}
        >
          <div className={`${styles.card} backdrop-blur-sm`}>
            <div className={styles["card-content"]}>
              {/* <div className="text-center w-[60%] max-[769px]:w-[90%] mx-auto pb-[56px] max-[769px]:pb-[42px] max-[426px]:pb-[1.25rem] mt-auto flex flex-col gap-[12px]">
                <h3 className="font-bold text-6xl max-[426px]:text-[2rem] font-apercu-black">
                  {card.cardTitle} {index}
                </h3>
                <p className="font-light text-sm max-[426px]:text-[0.5rem] max-[426px]:w-4/5 max-[426px]:mx-auto font-apercu-regular">
                  {card.cardDesc}
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="text-center w-[60%] max-[769px]:w-[90%] mx-auto pb-[56px] max-[769px]:pb-[42px] max-[426px]:pb-[1.25rem] mt-auto flex flex-col gap-[12px] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <h3 className="font-bold text-6xl max-[426px]:text-[2rem] font-apercu-black">
            {card.cardTitle} {index}
          </h3>
          <p className="font-light text-sm max-[426px]:text-[0.5rem] max-[426px]:w-4/5 max-[426px]:mx-auto font-apercu-regular">
            {card.cardDesc}
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none">
          <div className="">
            {card.id === 1 ? (
              <Image
                src={card.cardGif}
                alt="icon"
                className="scale-[2] absolute -top-[1rem] max-[769px]:top-[-2rem]"
              />
            ) : (
              <Image
                src={card.cardGif}
                alt="icon"
                className="scale-[1.2] absolute -top-[6rem]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverGlowServicesCard;
