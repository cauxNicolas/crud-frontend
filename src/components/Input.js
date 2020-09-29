import React from "react";

const Input = ({ placeholder, value, onChange, type, className }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        className={className}
      />
    </>
  );
};

export default Input;
