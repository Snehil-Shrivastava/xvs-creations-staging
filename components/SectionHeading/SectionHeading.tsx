import { JSX } from "react";

const SectionHeading = ({
  className,
  heading,
  btnHeading,
  btnIcon,
}: {
  className?: string;
  heading: string;
  btnHeading: string;
  btnIcon: JSX.Element;
}) => {
  const lastIndex = heading.length - 1;
  return (
    <div className={`relative ${className}`}>
      <h1
        className={`min-[2560px]:text-[12rem]/[12vh] min-[1905px]:text-[9.5rem]/[13vh] min-[1440px]:text-[7.5rem]/[12vh] min-[1024px]:text-[10rem]/[8.5rem] max-[1024px]:text-[5.6rem]/[12vh] max-[769px]:text-[4.8rem]/[5.8rem] max-[426px]:text-[3.375rem] max-[426px]:leading-none font-bold text-center font-apercu-black select-none`}
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0) 75% 90%)",
        }}
      >
        {heading.split("").map((word, index) => (
          <span
            key={index}
            className={`${
              index == lastIndex
                ? ""
                : "max-[769px]:mr-[2rem] max-[1025px]:mr-[2.2rem] min-[1025px]:max-[1281px]:mr-[3rem] min-[1281px]:max-[1349px]:mr-[2.8rem]"
            }`}
          >
            {word}
          </span>
        ))}
      </h1>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#ffffff56] max-[1349px]:text-sm max-[769px]:text-[0.625rem] max-[426px]:text-[0.4rem] font-light text-[#F79839] h-[2lh]`}
        style={{
          clipPath:
            "polygon(0 12px, 0 100%, calc(100% - 12px) 100%, 100% calc(100% - 12px), 100% 0%, 12px 0)",
        }}
      >
        <div
          className="flex max-[1349px]:gap-3.5 max-[769px]:gap-2 max-[426px]:gap-1.5 items-center bg-[#0009] backdrop-blur-xs h-full w-full px-4"
          style={{
            clipPath:
              "polygon(1px 12px, 1px calc(100% - 1px), calc(100% - 12px) calc(100% - 1px), calc(100% - 1px) calc(100% - 12px), calc(100% - 1px) 1px, 12px 1px)",
          }}
        >
          <span className="text-nowrap">{btnHeading}</span>
          <div>{btnIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
