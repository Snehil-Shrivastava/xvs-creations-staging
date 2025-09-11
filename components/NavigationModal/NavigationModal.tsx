import Link from "next/link";

import "./NavigationModal.css";

import Behance from "@/SVGs/Behance";
import Instagram from "@/SVGs/Instagram";
import Dribble from "@/SVGs/Dribbble";
import Facebook from "@/SVGs/Facebook";
import LinkedIn from "@/SVGs/LinkedIn";
import Twitter from "@/SVGs/Twitter";

const NavigationModal = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-[#F79839] bg-opacity-95 text-white z-[999] transition-transform duration-200 ease-in-out modal-container-outer translate-x-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute right-0 xl:max-1440p:w-[78%] flex flex-col xl:max-1440p:top-13 xl:max-1440p:gap-20">
        <div className="flex gap-10 max-[426px]:gap-[22px] xl:max-2xl:gap-15 min-[1536px]:max-[1906px]:gap-30 min-[1906px]:gap-40 max-sm:text-[0.75rem] sm:max-lg:text-[1.2rem] lg:max-xl:text-[1.4rem] xl:max-2xl:text-[1.375rem] min-[1536px]:max-[1906px]:text-[1.8rem] min-[1906px]:text-[2rem] font-extralight">
          <Link href="/about" onClick={toggle}>
            About
          </Link>
          <Link href="/services" onClick={toggle}>
            Work
          </Link>
          <Link href="/about" onClick={toggle}>
            Blog
          </Link>
          <Link href="/contact" onClick={toggle}>
            Contact
          </Link>
        </div>
        <div>
          <div className="max-xl:flex max-xl:flex-col max-sm:gap-[3dvh] gap-9 grid grid-cols-2 xl:max-2xl:gap-15 min-[1536px]:max-[1906px]:gap-18 min-[1906px]:gap-25">
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">
                Idenitiy and Design
              </h3>
              <Link
                href="/branding"
                className={`font-calSans max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}
                onClick={toggle}
              >
                Branding
              </Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">
                Print and Digital
              </h3>
              <Link
                href="/branding"
                className={`font-calSans max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}
              >
                Graphic Design
              </Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">
                Motion Craft
              </h3>
              <Link
                href="/branding"
                className={`font-calSans max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}
              >
                Editing and Motion Graphics
              </Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">
                Interface and Experience
              </h3>
              <Link
                href="/branding"
                className={`font-calSans max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}
              >
                UI/UX
              </Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">
                Design and Development
              </h3>
              <Link
                href="/branding"
                className={`font-calSans max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}
              >
                Web and App
              </Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">
                Design and Modelling
              </h3>
              <Link
                href="/branding"
                className={`font-calSans max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}
              >
                3D Product and Animations
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[5%] right-[4%] flex gap-2 sm:max-lg:gap-4  lg:max-2xl:gap-4 2xl:gap-4.5">
        <Link href="https://www.behance.net/xVSCreations" target="_blank">
          <Behance />
        </Link>
        <Link href="https://www.instagram.com/xvscreations" target="_blank">
          <Instagram />
        </Link>
        <Link href="https://www.dribbble.com/xvscreations" target="_blank">
          <Dribble />
        </Link>
        <Link href="https://www.facebook.com/xVSCreations" target="_blank">
          <Facebook />
        </Link>
        <Link href="https://www.linkedin.com/company/xvs-creations" target="_blank">
          <LinkedIn />
        </Link>
        <Link href="https://x.com/xvscreations" target="_blank">
          <Twitter />
        </Link>
      </div>
    </div>
  );
};

export default NavigationModal;
