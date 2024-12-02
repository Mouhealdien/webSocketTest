"use client";

import React, { ReactNode, useState } from "react";
import dynamic from "next/dynamic";
import "./styles/ModalButton.css";

const Modal = dynamic(() => import("./Modal"), {
  loading: () => <p>Loading...</p>,
});

type PropsType = {
  modalContent: ReactNode;
  icon: ReactNode;
  customeStyle?: boolean;
  ModalTitle?: string;
};

const ModalButton = ({
  modalContent,
  icon,
  customeStyle,
  ModalTitle,
}: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`icon-button ${customeStyle ? "icon-button-edit" : ""}`}
        onClick={toggleModal}
      >
        {icon}
      </button>
      <Modal ModalTitle={ModalTitle} isOpen={isOpen} onClose={toggleModal}>
        <div>{modalContent}</div>
      </Modal>
    </div>
  );
};

export default ModalButton;
