import Link from "next/link";

import "./NavigationModal.css";

import Behance from "@/SVGs/Behance";
import Instagram from "@/SVGs/Instagram";
import Dribble from "@/SVGs/Dribbble";
import Facebook from "@/SVGs/Facebook";
import LinkedIn from "@/SVGs/LinkedIn";
import Twitter from "@/SVGs/Twitter";

import { MainNavLinks, NavLinksBody } from "@/data/NavigationModalData";

const NavigationModal = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  const mainNavLinks = MainNavLinks;
  const navLinksBody = NavLinksBody;

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-[#F79839] bg-opacity-95 text-white z-[999] transition-transform duration-200 ease-in-out modal-container-outer translate-x-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute right-0 lg:max-xl:w-[75%] xl:max-1440p:w-[78%] flex flex-col lg:max-xl:top-[6dvh] xl:max-1440p:top-13 lg:max-xl:gap-[5dvh] xl:max-1440p:gap-[8dvh]">
        <div className="flex lg:max-xl:gap-10 xl:max-1440p:gap-15 lg:max-xl:text-[1.4rem] xl:max-1440p:text-[1.375rem] font-extralight">
          {mainNavLinks.map((link, index) => (
            <Link key={index} href={link.url} onClick={toggle}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="max-xl:flex max-xl:flex-col grid grid-cols-2 lg:max-xl:gap-[4dvh] xl:max-1440p:gap-[7dvh]">
            {navLinksBody.map((link, index) => (
              <div key={index}>
                <h3 className="lg:max-xl:text-[1rem] xl:max-1440p:text-[1.2rem]">
                  {link.subheading}
                </h3>
                <Link
                  href={link.url}
                  className={`font-calSans lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-1440p:text-[3rem]/[3.75rem]`}
                  onClick={toggle}
                >
                  {link.heading}
                </Link>
              </div>
            ))}
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
        <Link
          href="https://www.linkedin.com/company/xvs-creations"
          target="_blank"
        >
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
