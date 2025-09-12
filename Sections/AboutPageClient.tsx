import ClientReviews from "@/components/ClientReviews/ClientReviews";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import WordsBtnSVG from "@/SVGs/WordsBtnSVG";

const AboutPageClient = () => {
  return (
    <div className="my-40">
      <SectionHeading
        heading="CLIENTS"
        btnHeading="REVIEWS"
        btnIcon={<WordsBtnSVG />}
      />
      <p className="text-[#F3EDDE] font-apercu-regular md:max-lg:tracking-wider md:max-lg:text-[10px] lg:max-xl:text-[1rem] xl:max-1440p:text-[1.125rem] font-thin text-center">
        Hear from visionaries and experts
      </p>
      <ClientReviews />
    </div>
  );
};

export default AboutPageClient;
