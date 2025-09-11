import "./AutoScrollStrip.css";

import Image from "next/image";

import Amity from "@/SVGs/Amity";
import Paytm from "@/SVGs/Paytm";

const AutoScrollStrip = () => {
  const ClientReviews = [
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 1",
      logo: (
        <Amity className="lg:max-xl:mx-[32px] xl:max-1440p:mx-[40px] lg:max-xl:w-[90px]" />
      ),
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 2",
      logo: <Paytm />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 3",
      logo: (
        <Amity className="lg:max-xl:mx-[32px] xl:max-1440p:mx-[40px] lg:max-xl:w-[90px]" />
      ),
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 4",
      logo: <Paytm />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 5",
      logo: (
        <Amity className="lg:max-xl:mx-[32px] xl:max-1440p:mx-[40px] lg:max-xl:w-[90px]" />
      ),
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 6",
      logo: <Paytm />,
    },
  ];

  const allLogos = [...ClientReviews, ...ClientReviews];
  return (
    <div className="pb-[30px] whitespace-nowrap overflow-hidden">
      <div className="marquee-container">
        {allLogos.map((item, index) => (
          <div key={index}>{item.logo}</div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollStrip;
