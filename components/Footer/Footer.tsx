"use client";

import "./Footer.css";
import Link from "next/link";
import Image from "next/image";

import XVSlogo from "@/SVGs/XVSLogo";

import Behance from "@/SVGs/Behance";
import Instagram from "@/SVGs/Instagram";
import Dribbble from "@/SVGs/Dribbble";
import Facebook from "@/SVGs/Facebook";
import LinkedIn from "@/SVGs/LinkedIn";
import Twitter from "@/SVGs/Twitter";

import { useModal } from "@/context/ModalContext";
import FooterBtnSVG from "@/SVGs/FooterBtnSVG";

const Footer = () => {
  const { isModalOpen } = useModal();

  return (
    <div
      className={`mt-[170px] footer-container max-[426px]:mt-[5rem] w-9/10 max-[426px]:w-19/20 mx-auto ${
        isModalOpen ? "invisible" : ""
      }`}
    >
      <div className="footer-content-container">
        <div className="pulse-glow-footer"></div>
        <div className="mx-auto pb-[72px] max-[769px]:pb-[32px]">
          <div className="mx-auto">
            <div className=" border-b border-b-[rgba(247,152,57,0.1)]">
              <div className="flex gap-[48px] items-center justify-between pt-[111px] pb-[150px] min-[1536px]:w-[90%] min-[1536px]:mx-auto max-[1441px]:w-[85%] max-[1441px]:mx-auto max-[1441px]:pb-[70px] max-[1026px]:w-[85%] max-[1026px]:mx-auto max-[1026px]:pb-[70px] max-[769px]:pt-[80px] max-[769px]:pb-[80px] max-[769px]:w-[85%] max-[769px]:mx-auto max-[426px]:gap-[0.875rem] max-[426px]:flex-col max-[426px]:py-[2.5rem]">
                <div className="flex-1 max-[769px]:flex-none">
                  <h1
                    className={`xl:max-1440p:text-[3rem]/[4rem] tracking-wider xl:max-1440p:w-full font-calSans`}
                  >
                    Let&#39;s start creating together
                  </h1>
                </div>
                <div className="flex-1 text-center flex justify-center">
                  <Link
                    href="/"
                    className="flex items-center text-nowrap bg-[#F79839] xl:max-1440p:px-5 xl:max-1440p:py-4 xl:max-1440p:rounded-[48px] xl:max-1440p:text-2xl xl:max-1440p:gap-4 font-semibold"
                  >
                    <div>
                      <FooterBtnSVG />
                    </div>
                    <div>
                      <span>Schedule A Meeting</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-links-block max-[426px]:mx-auto mt-[22px] max-[769px]:w-[85%] max-[769px]:mx-auto max-[1026px]:w-[85%] max-[1026px]:mx-auto max-[1026px]:mt-[44px] max-[1441px]:w-[85%] max-[1441px]:mx-auto max-[1441px]:mt-[58.58px] min-[1536px]:w-[90%] min-[1536px]:mx-auto max-[426px]:w-9/10 max-[426px]:mt-[22px]">
              <div className="footer-link-block first justify-between max-[1026px]:justify-start max-[1026px]:gap-[64px] max-[769px]:justify-start max-[769px]:gap-[46px] max-[426px]:justify-start max-[426px]:gap-[46px] gap-[36px]">
                <div className="flex justify-center items-center">
                  <XVSlogo className="" />
                </div>
                <div className="gap-x-[12px] gap-y-[10px] grid grid-cols-3 max-[426px]:gap-[0.4rem] max-[426px]:w-auto">
                  <Link
                    href="https://www.behance.net/xVSCreations"
                    target="_blank"
                  >
                    <Behance fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/xvscreations"
                    target="_blank"
                  >
                    <Instagram fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.dribbble.com/xvscreations"
                    target="_blank"
                  >
                    <Dribbble fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/xVSCreations"
                    target="_blank"
                  >
                    <Facebook fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/xvs-creations"
                    target="_blank"
                  >
                    <LinkedIn fill="#ffffff" />
                  </Link>
                  <Link href="https://x.com/xvscreations" target="_blank">
                    <Twitter fill="#ffffff" />
                  </Link>
                </div>
              </div>
              <div className="footer-link-block second flex-[0.65] max-[1906px]:flex max-[1906px]:justify-center max-[1441px]:flex max-[1441px]:justify-center max-[426px]:justify-end">
                <div className="max-[1025px]:mx-auto max-[1441px]:flex max-[1441px]:flex-col max-[1441px]:h-full max-[426px]:w-[80%] max-[769px]:w-auto max-[1026px]:w-[80%] max-[769px]:mx-0">
                  <h1 className="font-semibold xl:max-1440p:text-[18px] xl:max-1440p:pb-[26px]">
                    Contacts
                  </h1>
                  <p className="xl:max-1440p:text-[14px] xl:max-1440p:font-extralight">
                    2nd Floor, 1/23 Rajni Khand, Sharda Nagar,
                  </p>
                  <p className="xl:max-1440p:text-[14px] xl:max-1440p:font-extralight">
                    Lucknow, UP (226002), India.
                  </p>
                  <div className="flex gap-[32px] mt-[72px] max-[1441px]:mt-auto max-[1026px]:mt-[52px] max-[769px]:gap-[44px] max-[769px]:mt-[22px] max-[426px]:flex-col max-[426px]:mt-[22px] max-[426px]:gap-0">
                    <h1 className={`xl:max-1440p:text-[53px] font-calSans`}>
                      Say Hi!
                    </h1>
                    <div className="flex flex-col justify-center">
                      <Link
                        href="mailto:info@xvscreations.com"
                        className="hover:underline xl:max-1440p:text-[14px] xl:max-1440p:font-extralight"
                      >
                        info@xvscreations.com
                      </Link>
                      <p className="xl:max-1440p:text-[14px] xl:max-1440p:font-extralight">
                        +91-8726899713
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-link-block third flex-[0.2]">
                <h1 className="font-semibold xl:max-1440p:text-[18px] xl:max-1440p:pb-[26px]">
                  Services
                </h1>
                <div className="flex flex-col xl:max-1440p:gap-[8px] xl:max-1440p:text-[14px]">
                  <Link href="/" className="hover:underline">
                    Branding
                  </Link>
                  <Link href="/" className="hover:underline">
                    Graphic Design
                  </Link>
                  <Link href="/" className="hover:underline">
                    UI/UX Design
                  </Link>
                  <Link href="/" className="hover:underline">
                    Website Development
                  </Link>
                  <Link href="/" className="hover:underline">
                    Motion Graphics
                  </Link>
                  <Link href="/" className="hover:underline">
                    2D Animation
                  </Link>
                  <Link href="/" className="hover:underline">
                    Social Media Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#282828]">
        <div className="flex justify-between text-white/[0.5] w-[95%] mx-auto text-[14px] max-[769px]:text-[0.75rem] max-[426px]:text-[0.5rem] max-[426px]:w-[95%] pt-[28px] pb-[12px]">
          <div>
            <p className="font-light">
              @ 2025 xVS Creations All Rights Reserved
            </p>
          </div>
          <div className="flex gap-[15px]">
            <Link href="/" className="hover:underline">
              Terms and conditions
            </Link>
            <Link href="/" className="hover:underline">
              Privacy Cookies
            </Link>
            <Link href="/" className="hover:underline">
              policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
