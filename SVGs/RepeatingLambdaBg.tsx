"use client";

import { useRef } from "react";
import styles from "./Styles/RepeatingLambdaBg.module.css";
import MotifSVG from "./RepeatingLambdaMotif";
import { useModal } from "@/context/ModalContext";

const RepeatingSVG = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const { isModalOpen } = useModal();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`absolute -top-[10px] left-0 right-0 h-[828px] max-[769px]:h-[528px] z-[55] select-none ${styles.repeatingBgContainer} ${ isModalOpen ? 'hidden' : ''}`}
    >
      <div className={styles.baseLayer}>
        <MotifSVG className="" />
      </div>

      <div className={styles.glowLayer}>
        <MotifSVG className="" />
      </div>
    </div>
  );
};

export default RepeatingSVG;
