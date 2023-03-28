import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Input = ({ label, register, required, maxLength, pattern }) => {
  return (
    <div className="form-group ">
      <label>{label}</label>
      <input {...(register && register(required, maxLength, pattern))} />
    </div>
  );
};

export default Input;
