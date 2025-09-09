'use client'

import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import Form from "next/form";

import bgImg from '@/public/images/contact-bg.png'
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import WordsBtnSVG from "@/SVGs/WordsBtnSVG";

const Page = () => {
  const { isModalOpen } = useModal();
  return (
    <div>
        page
    </div>
  );
};

export default Page;
