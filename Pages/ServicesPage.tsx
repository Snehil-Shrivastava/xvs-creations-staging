import BgVideo from "@/components/BgVideo/BgVideo";
import ServicesPageHeading from "@/Sections/ServicesPageHeading";

import ServicesCard from "@/components/ServicesCard/ServicesCard";

const ServicesPage = () => {
  return (
    <main className="pb-50">
      <div className="brightness-[0.4] absolute pointer-events-none -z-10 video-container">
        <BgVideo />
      </div>
      <div className="h-[70vh]">
        <ServicesPageHeading />
      </div>
      <div className="lg:max-xl:w-4/5 xl:max-1440p:w-4/5 mx-auto lg:max-xl:mt-30 xl:max-1440p:mt-55">
        <ServicesCard />
      </div>
    </main>
  );
};

export default ServicesPage;
