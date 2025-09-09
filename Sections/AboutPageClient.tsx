import ClientReviews from "@/components/ClientReviews/ClientReviews";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import WordsBtnSVG from "@/SVGs/WordsBtnSVG";

const AboutPageClient = () => {
  return (
    <div className="mt-40 pb-40">
      <SectionHeading
        heading="CLIENTS"
        btnHeading="REVIEWS"
        btnIcon={<WordsBtnSVG />}
      />
      <p className="text-[#F3EDDE] font-apercu-regular text-[1.125rem] font-thin text-center">
        Hear from visionaries and experts
      </p>
      <ClientReviews />
    </div>
  );
};

export default AboutPageClient;
