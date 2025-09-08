"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextType {
    isModalOpen: boolean;
    toggleModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider")
    }

    return context
}
