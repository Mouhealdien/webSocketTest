import React, { ReactNode } from "react";
import "./styles/IconButton.css";

type PropsType = {
  icon: ReactNode;
  onClick?: () => void;
  customeStyle?: string;
};

const IconButton = ({ icon, onClick, customeStyle }: PropsType) => {
  const handelButton = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handelButton}
      className={`icon-button ${customeStyle ? customeStyle : "default-style"}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
