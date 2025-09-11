"use client";

import Image, { StaticImageData } from "next/image";
import cardImag from "@/public/images/Files 1.png";

import "./ServicesCard.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JSX, useRef } from "react";
import { useGSAP } from "@gsap/react";

import { cardsData } from "@/data/ServicesPageCardData";
import Link from "next/link";
import ServicesCardSVG from "@/SVGs/ServicesCardSVG";

gsap.registerPlugin(ScrollTrigger);

const ServicesCard = () => {
  const cardData = cardsData;

  const mainContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // Filter out any null elements to ensure a clean array of card elements
      const cards = cardsRef.current.filter((el) => el !== null);
      if (cards.length <= 1) return; // No animation needed for 0 or 1 card

      // Set initial z-index for all cards to establish the stacking order
      cards.forEach((card, index) => {
        gsap.set(card, { zIndex: index + 1 });
      });

      // Loop through each card (except the last one) to create a pinning and stacking animation
      cards.forEach((card, index) => {
        if (index === cards.length - 1) {
          // The last card doesn't need a ScrollTrigger to pin it
          return;
        }

        const pinnedCard = card;
        const stackingCard = cards[index + 1];

        const timeline = gsap.timeline({
          scrollTrigger: {
            // The trigger is the card that will be pinned
            trigger: pinnedCard,
            pin: true, // Pin the trigger element
            start: "top 25%",
            // @ts-expect-error random
            end: () => `+=${stackingCard.offsetHeight}`,
            scrub: true,
            anticipatePin: 1,
            // prevent the gap that forms between pinned sections
            pinSpacing: false,
          },
        });

        // Animate the next card (stackingCard) coming on top
        timeline.fromTo(
          stackingCard,
          { yPercent: 100, scale: 0.9 },
          { yPercent: 0, scale: 1, ease: "none" }
        );

        // Simultaneously, animate the current pinned card scaling down
        timeline.to(
          pinnedCard,
          { opacity: 0, ease: "none" },
          "<" // Start at the same time as the previous animation
        );
      });
    },
    { scope: mainContainerRef } // Scope the GSAP context
  );

  return (
    <div ref={mainContainerRef} className="flex flex-col relative">
      {cardData.map(
        (
          card: {
            id: number;
            title: string;
            subtitle: string;
            description: JSX.Element;
            image: JSX.Element;
          },
          index: number
        ) => (
          <div
            // @ts-expect-error eandom
            ref={(el) =>
              // @ts-expect-error eandom
              (cardsRef.current[index] = el)
            }
            key={index}
            className="relative"
          >
            <h1 className="font-calSans xl:max-1440p:text-[6rem] text-[#F79839] absolute top-[-5.5rem] right-0 -z-10">
              {card && card.title}
            </h1>
            <div className="border-top-left" />
            <div className="border-bottom-right" />
            <div
              className="bg-[rgba(67,67,67,0.36)] backdrop-blur-sm relative"
              style={{
                clipPath:
                  "polygon(0 0, 0 100%, calc(100% - 96px) 100%, 100% calc(100% - 96px), 100% 0, 0 0)",
              }}
            >
              <div className="">
                <p className="xl:max-1440p:text-[1.25rem]/[2rem] font-thin xl:max-1440p:w-9/20 ml-auto xl:max-1440p:py-25 xl:max-1440p:pr-20">
                  {card.description}
                </p>
              </div>
            </div>
            <p className="font-apercu-bold xl:max-1440p:text-[0.75rem] absolute origin-bottom-left bottom-0 rotate-270 text-[#F3EDDE] tracking-[8px]">
              {card.subtitle}
            </p>
            <div className="absolute origin-bottom bottom-0">{card.image}</div>
            <Link href='/' className="absolute bottom-0 right-0">
              <ServicesCardSVG />
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default ServicesCard;
