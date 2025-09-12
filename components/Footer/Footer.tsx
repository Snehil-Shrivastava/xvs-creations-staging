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
      className={`mt-[170px] footer-container md:max-lg:w-[95%] w-9/10 mx-auto ${
        isModalOpen ? "invisible" : ""
      }`}
    >
      <div className="footer-content-container">
        <div className="pulse-glow-footer"></div>
        <div className="mx-auto pb-[72px] max-[769px]:pb-[32px]">
          <div className="mx-auto">
            <div className="border-b border-b-[rgba(247,152,57,0.1)]">
              <div className="flex gap-[48px] items-center justify-between md:max-lg:pt-[72px] lg:max-xl:pt-[88px] xl:max-1440p:pt-[111px] md:max-lg:pb-[50px] lg:max-xl:pb-[60px] xl:max-1440p:pb-[70px] mx-auto md:max-lg:w-[90%] lg:max-1440p:w-[85%]">
                <div className="flex-1">
                  <h1
                    className={`md:max-lg:text-[2rem]/[3rem] lg:max-xl:text-[2.5rem]/[3.5rem] xl:max-1440p:text-[3rem]/[4rem] tracking-wider xl:max-1440p:w-full font-calSans`}
                  >
                    Let&#39;s start creating together
                  </h1>
                </div>
                <div className="flex-1 text-center flex justify-center">
                  <Link
                    href="/"
                    className="flex items-center text-nowrap bg-[#F79839] md:max-xl:px-4 xl:max-1440p:px-5 md:max-xl:py-3 xl:max-1440p:py-4 md:max-lg:rounded-[26px] lg:max-xl:rounded-[32px] xl:max-1440p:rounded-[48px] md:max-lg:text-base lg:max-xl:text-xl xl:max-1440p:text-2xl md:max-lg:gap-3 lg:max-xl:gap-3 xl:max-1440p:gap-4 font-semibold"
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
            <div className="footer-links-block mx-auto mt-[22px] md:max-lg:w-[90%] lg:max-1440p:w-[85%] md:max-lg:mt-[44px] lg:max-1440p:mt-[58.58px]">
              <div className="footer-link-block first justify-between max-[1026px]:justify-start max-[1026px]:gap-[64px] max-[769px]:justify-start max-[769px]:gap-[46px] max-[426px]:justify-start max-[426px]:gap-[46px] gap-[36px]">
                <div className="flex justify-center items-center">
                  <XVSlogo className="" />
                </div>
                <div className="gap-x-[12px] gap-y-[10px] grid grid-cols-3">
                  <Link
                    href="https://www.behance.net/xVSCreations"
                    target="_blank"
                  >
                    <Behance className="md:max-lg:w-4.5" fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/xvscreations"
                    target="_blank"
                  >
                    <Instagram className="md:max-lg:w-4" fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.dribbble.com/xvscreations"
                    target="_blank"
                  >
                    <Dribbble className="md:max-lg:w-4" fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/xVSCreations"
                    target="_blank"
                  >
                    <Facebook className="md:max-lg:w-4" fill="#ffffff" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/xvs-creations"
                    target="_blank"
                  >
                    <LinkedIn className="md:max-lg:w-4" fill="#ffffff" />
                  </Link>
                  <Link href="https://x.com/xvscreations" target="_blank">
                    <Twitter className="md:max-lg:w-4" fill="#ffffff" />
                  </Link>
                </div>
              </div>
              <div className="footer-link-block second flex-[0.65] max-[1906px]:flex max-[1906px]:justify-center max-[1441px]:flex max-[1441px]:justify-center max-[426px]:justify-end">
                <div className="max-[1025px]:mx-auto max-[1441px]:flex max-[1441px]:flex-col max-[1441px]:h-full max-[426px]:w-[80%] max-[769px]:w-auto max-[1026px]:w-[80%] max-[769px]:mx-0">
                  <h1 className="font-semibold md:max-lg:text-[14px] lg:max-xl:text-[16px] xl:max-1440p:text-[18px] md:max-lg:pb-[18px] lg:max-xl:pb-[22px] xl:max-1440p:pb-[26px]">
                    Contacts
                  </h1>
                  <p className="md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-[14px] font-extralight">
                    2nd Floor, 1/23 Rajni Khand, Sharda Nagar,
                  </p>
                  <p className="md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-[14px] font-extralight">
                    Lucknow, UP (226002), India.
                  </p>
                  <div className="flex gap-[32px] mt-[72px] max-[1441px]:mt-auto max-[1026px]:mt-[52px] max-[769px]:gap-[44px] max-[769px]:mt-[22px] max-[426px]:flex-col max-[426px]:mt-[22px] max-[426px]:gap-0">
                    <h1 className={`md:max-lg:text-[38px] lg:max-xl:text-[46px] xl:max-1440p:text-[53px] font-calSans`}>
                      Say Hi!
                    </h1>
                    <div className="flex flex-col justify-center">
                      <Link
                        href="mailto:info@xvscreations.com"
                        className="hover:underline md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-[14px] font-extralight"
                      >
                        info@xvscreations.com
                      </Link>
                      <Link href='tel:+918115128777' className="hover:underline md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-[14px] font-extralight">
                        +91-8115128777
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-link-block third flex-[0.2]">
                <h1 className="font-semibold md:max-lg:text-[14px] lg:max-xl:text-[16px] xl:max-1440p:text-[18px] md:max-lg:pb-[18px] lg:max-xl:pb-[22px] xl:max-1440p:pb-[26px]">
                  Services
                </h1>
                <div className="flex flex-col md:max-lg:gap-[5px] lg:max-xl:gap-[6px] xl:max-1440p:gap-[8px] md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-[14px]">
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
              Privacy policy
            </Link>
            <Link href="/" className="hover:underline">
              Cookies policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
