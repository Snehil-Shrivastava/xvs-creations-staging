import { JSX } from "react";

const SectionHeading = ({
  className,
  heading,
  btnHeading,
  btnIcon,
  style
}: {
  className?: string;
  heading: string;
  btnHeading: string;
  btnIcon: JSX.Element;
  style?: string
}) => {
  const lastIndex = heading.length - 1;
  return (
    <div className={`relative ${className}`}>
      <h1
        className={`max-[426px]:leading-none font-bold text-center font-apercu-black select-none ${style ? style : 'lg:max-xl:text-[8rem]/[7.5rem] xl:max-1440p:text-[9rem]/[8.5rem]'}`}
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
                : "lg:max-xl:mr-[2.2rem] xl:max-2xl:mr-[2.8rem]"
            }`}
          >
            {word}
          </span>
        ))}
      </h1>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#ffffff56] lg:max-xl:text-xs xl:max-1440p:text-sm font-light text-[#F79839] h-[2lh]`}
        style={{
          clipPath:
            "polygon(0 12px, 0 100%, calc(100% - 12px) 100%, 100% calc(100% - 12px), 100% 0%, 12px 0)",
        }}
      >
        <div
          className="flex lg:max-xl:gap-3 xl:max-1440p:gap-3.5 items-center bg-[#0009] backdrop-blur-xs h-full w-full px-4"
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
