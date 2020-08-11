import React from "react";
import "./Button.css";

const Button = ({ children, clicked }) => {
  return (
    <button className="btn" onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
