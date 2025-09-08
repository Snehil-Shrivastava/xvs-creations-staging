import './AutoScrollStrip.css'

import Image from "next/image";

import Amity from '@/SVGs/Amity';
import Paytm from '@/SVGs/Paytm';

const AutoScrollStrip = () => {

    const ClientReviews = [
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 1",
      logo: <Amity />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 2",
      logo: <Paytm />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 3",
      logo: <Amity />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 4",
      logo: <Paytm />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 5",
      logo: <Amity />,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be. img 6",
      logo: <Paytm />,
    },
  ];

  const allLogos = [...ClientReviews, ...ClientReviews]
  return (
    <div className="pb-[30px] whitespace-nowrap overflow-hidden max-[426px]:pb-0">
        <div className='marquee-container'>
          {allLogos.map((item, index) => (
            // <Image key={index} src={item.logo} alt="image1" className="inline-block mx-[40px] max-sm:mx-[20px] max-[1024px]:w-[90px] max-[426px]:w-[40px]" />
            <div key={index}>
            {item.logo}
            </div>
          ))}
        </div>
    </div>
  );
};

export default AutoScrollStrip;
