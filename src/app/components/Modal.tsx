"use client";

import React, { ReactNode } from "react";
import "./styles/Modal.css";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ModalTitle?: string;
};

const Modal = ({ isOpen, onClose, children, ModalTitle }: PropsType) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{ModalTitle}</h2>
          <button onClick={onClose} className="modal-close-button">
            <svg
              className="modal-close-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
