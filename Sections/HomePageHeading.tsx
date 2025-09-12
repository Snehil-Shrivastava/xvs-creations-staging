import Image from 'next/image';

import HomeSpinningLambda from '@/public/Gifs/HomeSpinningLambda.gif'

const HomePageHeading = () => {

  return (
    <header className={`relative pointer-events-none mx-auto z-[66]`}>
      <p className="md:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] xl:max-1400p:text-[1.2rem] font-light inline absolute left-1/2 -translate-x-1/2">
        Creating Unforgettable Design
      </p>
      <div className="flex justify-center">
        <div className="flex">
          <h1
            className={`text-[#ffab40] inline md:max-lg:text-[7.75rem]/[9rem] lg:max-xl:text-[10rem]/[11rem] xl:max-1440p:text-[13.125rem]/[13.5rem] font-calSans`}
          >
            e
          </h1>
          <div className="md:max-lg:w-[90px] lg:max-xl:w-[120px] xl:max-1440p:w-[150px] relative overflow-visible">
            <Image
                className="absolute top-[15%] scale-[1] md:max-lg:left-[-5px]"
                src={HomeSpinningLambda}
                alt=""
              />
          </div>
        </div>
        <h1
          className={`text-[#ffab40] inline md:max-lg:text-[7.75rem]/[9rem] lg:max-xl:text-[10rem]/[11rem] xl:max-2xl:text-[13.125rem]/[13.5rem] font-calSans`}
        >
          perience
        </h1>
      </div>
    </header>
  );
};

export default HomePageHeading;
