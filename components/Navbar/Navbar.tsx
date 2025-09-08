"use client";

import Link from "next/link";

import XVSlogo from "@/SVGs/XVSNavLogo";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import NavigationModal from "@/components/NavigationModal/NavigationModal";
import { useModal } from "@/context/ModalContext";

const Navbar = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <nav className="w-auto mx-auto absolute top-0">
        <div className="flex justify-between mt-4.5 h-7 sm:max-lg:mt-6.5 sm:max-lg:h-11.25 lg:max-xl:mt-7 lg:max-xl:h-14.5 xl:max-2xl:mt-8 xl:max-2xl:h-14.5 min-[1536px]:max-[1905px]:mt-8 min-[1536px]:max-[1905px]:h-14.5 min-[1905px]:mt-12 min-[1905px]:h-20 fixed z-[99] left-[4%]">
          <Link href="./" className="h-full z-[99]" onClick={isModalOpen ? toggleModal: () => null}>
            <XVSlogo />
          </Link>
        </div>
        <HamburgerMenu isOpen={isModalOpen} toggle={toggleModal} />
      </nav>
      <NavigationModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default Navbar;
