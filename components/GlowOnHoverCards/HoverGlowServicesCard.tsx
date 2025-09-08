"use client";

import { useRef } from "react";
import styles from "./HoverGlowServicesCard.module.css";

const HoverGlowServicesCard = ({ index }: { index: number }) => {
  const cardsContainerRef = useRef(null);
  return (
    <div className={`${styles.bodyContainer}`}>
      <div id="cards" className={styles.cards} ref={cardsContainerRef}>
        <div
          key={index}
          className={`${styles.cardShadowContainer} relative h-full backdrop-blur-sm`}
        >
          <div className={`${styles.card} backdrop-blur-sm`}>
            <div className={styles["card-content"]}>
              <div className="text-center w-[60%] max-[769px]:w-[90%] mx-auto pb-[56px] max-[769px]:pb-[42px] max-[426px]:pb-[1.25rem] mt-auto flex flex-col gap-[12px]">
                <h3 className="font-bold text-6xl max-[426px]:text-[2rem]">
                  UI/UX {index}
                </h3>
                <p className="font-light text-sm max-[426px]:text-[0.5rem] max-[426px]:w-4/5 max-[426px]:mx-auto">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none">
            <div className="">
              { index == 0 || index == 6 ? <Image src={Gif3d} alt="icon" className="scale-[2] absolute -top-[1rem] max-[769px]:top-[-2rem]" /> : index == 1 || index == 7 ? <Image src={Gif3d2} alt="icon" className="scale-[1.2] absolute -top-[6rem]" /> : index == 2 || index == 8 ? <Image src={Gif3d3} alt="icon" className="scale-[1.2] absolute -top-25" /> : index == 3 || index == 9 ? <Image src={Gif3d4} alt="icon" className="scale-[1.2] absolute -top-25" /> : index == 4 || index == 10 ? <Image src={Gif3d5} alt="icon" className="scale-[1.2] absolute -top-25" /> : <Image src={Gif3d6} alt="icon" className="scale-[1.2] absolute -top-25" />}
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default HoverGlowServicesCard;
