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
      <p className="text-[#F3EDDE] font-apercu-regular text-[1.125rem] font-thin text-center">
        We keep it simple and listen...
      </p>
      <div className="flex gap-[28px] mt-[64px] card-container justify-center items-center min-[1906px]:items-stretch max-[1906px]:items-stretch max-[1441px]:items-stretch max-[1025px]:items-stretch max-[769px]:items-stretch max-[426px]:gap-[8px] max-[426px]:mt-[22px]">
        {cardsData.map((card, index) => (
          <HoverGlowProcessCard key={index} card={card} />
        ))}
      </div>
      <p className="text-[20px] font-light mt-[66px] max-2xl:w-9/10 max-xl:w-[90%] max-lg:w-[80%] mx-auto max-[1025px]:text-[1rem] max-[769px]:w-[90%] max-[769px]:text-[0.75rem] max-[426px]:text-[0.5rem] max-[426px]:mt-[40px] max-[1906px]:w-7/10 min-[1906px]:text-[1.5rem] min-[1906px]:w-1/2 text-[#F3EDDE] text-center">
        At xVS we design using tools but it&#39;s more than that, it&#39;s the
        aspiration of all who come together to make inspiration a reality.
      </p>
    </div>
  );
};

export default AboutPageProcess;
