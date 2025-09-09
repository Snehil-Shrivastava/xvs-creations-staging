'use client'

import PulseGlowDots from "@/components/PulseGlowDots/PulseGlowDots";
import { useModal } from "@/context/ModalContext";
import ContactPageForm from "@/Sections/ContactPageForm";

const ContactPage = () => {
  const { isModalOpen } = useModal()

  return (
    <main className={`${isModalOpen ? 'invisible': ''} min-h-[100vh] relative`}
      style={{
        backgroundImage: "url(/images/contact-bg.png)",
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className="bg-[rgba(255,255,255,0.1)] absolute w-50 h-50 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          boxShadow: "0 0 120px 150px rgba(255, 255, 255, 0.1)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "#282828",
          maskImage: "radial-gradient(920px, rgb(0, 0, 0), transparent)",
        }}
      />
      <PulseGlowDots />
      <ContactPageForm />
    </main>
  );
};

export default ContactPage;
