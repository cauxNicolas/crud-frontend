import React from "react";

const Input = ({ placeholder, value, onChange, type }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
