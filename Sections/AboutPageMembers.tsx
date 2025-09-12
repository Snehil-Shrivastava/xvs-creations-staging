import MembersCard from "@/components/MembersCard/MembersCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import TeamMembersSVG from "@/SVGs/TeamMembersSVG";

const AboutPageMembers = () => {
  return (
    <div className="pb-40">
      <SectionHeading
        heading="MEMBERS"
        btnHeading="TEAM"
        btnIcon={<TeamMembersSVG />}
        gap="md:max-lg:gap-0 lg:max-xl:gap-1 xl:max-1440p:gap-1.5"
      />
      <p className="text-[#F3EDDE] font-apercu-regular md:max-lg:tracking-wider md:max-lg:text-[10px] lg:max-xl:text-[1rem] xl:max-1440p:text-[1.125rem] font-thin text-center">
        We keep it simple and listen...
      </p>
      <div className="py-15 md:max-lg:gap-15 lg:max-xl:gap-20 xl:max-1440p:gap-25 w-[95%] mx-auto flex flex-wrap justify-center">
      {/* grid xl:max-1440p:grid-cols-4 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <MembersCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default AboutPageMembers;
