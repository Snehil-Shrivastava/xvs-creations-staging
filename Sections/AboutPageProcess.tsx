import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ProcessBtnSVG from "@/SVGs/ProcessBtnSVG";

import { cardsData } from "@/data/AboutPageProcessData";
import HoverGlowProcessCard from "@/components/GlowOnHoverCards/HoverGlowProcessCard";

const AboutPageProcess = () => {
  return (
    <div>
      <SectionHeading
        heading="PROCESS"
        btnHeading="PROCESS"
        btnIcon={<ProcessBtnSVG />}
      />
      <p className="text-[#F3EDDE] font-apercu-regular md:max-lg:tracking-wider md:max-lg:text-[10px] lg:max-xl:text-[1rem] xl:max-1440p:text-[1.125rem] font-thin text-center">
        We keep it simple and listen...
      </p>
      <div className="flex md:max-lg:gap-[18px] gap-[28px] md:max-lg:mt-[48px] mt-[64px] card-container justify-center items-center min-[1906px]:items-stretch max-[1906px]:items-stretch max-[1441px]:items-stretch max-[1025px]:items-stretch max-[769px]:items-stretch max-[426px]:gap-[8px] max-[426px]:mt-[22px]">
        {cardsData.map((card, index) => (
          <HoverGlowProcessCard key={index} card={card} />
        ))}
      </div>
      <p className="md:max-lg:text-[0.75rem] lg:max-xl:text-[1rem] xl:max-1440p:text-[20px] font-light md:max-lg:mt-[32px] lg:max-xl:mt-[52px] xl:max-1440p:mt-[66px] lg:max-xl:w-9/10 xl:max-1440p:w-9/10 mx-auto text-[#F3EDDE] text-center">
        At xVS we design using tools but it&#39;s more than that, it&#39;s the
        aspiration of all who come together to make inspiration a reality.
      </p>
    </div>
  );
};

export default AboutPageProcess;
