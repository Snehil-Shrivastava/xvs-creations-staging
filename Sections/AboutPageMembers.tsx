import SectionHeading from "@/components/SectionHeading/SectionHeading";
import TeamMembersSVG from "@/SVGs/TeamMembersSVG";

const AboutPageMembers = () => {
  return (
    <div>
      <SectionHeading
        heading="MEMBERS"
        btnHeading="TEAM"
        btnIcon={<TeamMembersSVG />}
        gap="md:max-lg:gap-0 lg:max-xl:gap-1 xl:max-1440p:gap-1.5"
      />
      <p className="text-[#F3EDDE] font-apercu-regular md:max-lg:tracking-wider md:max-lg:text-[10px] lg:max-xl:text-[1rem] xl:max-1440p:text-[1.125rem] font-thin text-center">
        We keep it simple and listen...
      </p>
    </div>
  );
};

export default AboutPageMembers;
