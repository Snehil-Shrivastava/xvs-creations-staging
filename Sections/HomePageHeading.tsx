import Image from 'next/image';

import HomeSpinningLambda from '@/public/Gifs/HomeSpinningLambda.gif'

const HomePageHeading = () => {
  return (
    <header className="relative pointer-events-none mx-auto z-[66]">
      <p className="max-sm:text-[0.75rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] xl:max-2xl:text-[1.2rem] min-[1536px]:max-[1905px]:text-[1.5rem] min-[1905px]:text-[1.8rem] font-light inline absolute left-1/4">
        Creating Unforgettable Design
      </p>
      <div className="flex justify-center">
        <div className="flex">
          <h1
            className={`text-[#ffab40] inline text-[62px]/[80px] sm:max-lg:text-[7.75rem]/[9rem]  lg:max-xl:text-[9.375rem]/[10.625rem] xl:max-2xl:text-[13.125rem]/[13.5rem] min-[1536px]:max-[1905px]:text-[13.125rem]/[14rem] min-[1905px]:text-[15.6rem]/[17rem] font-calSans`}
          >
            e
          </h1>
          <div className="w-[45px] sm:max-lg:w-20 lg:max-xl:w-34 xl:max-2xl:w-[150px] min-[1536px]:max-[1905px]:w-45 min-[1905px]:w-56 relative overflow-visible">
            <Image
                className="absolute top-[15%] scale-[1] max-[769px]:top-[22%]"
                src={HomeSpinningLambda}
                alt=""
              />
          </div>
        </div>
        <h1
          className={`text-[#ffab40] inline text-[62px]/[80px] sm:max-lg:text-[7.75rem]/[9rem]  lg:max-xl:text-[9.375rem]/[10.625rem] xl:max-2xl:text-[13.125rem]/[13.5rem] min-[1536px]:max-[1905px]:text-[13.125rem]/[14rem] min-[1905px]:text-[15.6rem]/[17rem] font-calSans`}
        >
          perience
        </h1>
      </div>
    </header>
  );
};

export default HomePageHeading;
