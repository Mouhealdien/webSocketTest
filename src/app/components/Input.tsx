import React from "react";
import "./styles/Input.css";

type PropsType = {
  inputProps: React.HTMLProps<HTMLInputElement>;
  label?: string;
  labelStyle?: string;
};

const Input = ({ inputProps, label, labelStyle }: PropsType) => {
  return (
    <div className="input-wrapper">
      {label && (
        <label className={`input-label ${labelStyle ? labelStyle : ""}`}>
          {label}
        </label>
      )}
      <input {...inputProps} className="input-field" />
    </div>
  );
};

export default Input;
