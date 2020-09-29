import React from "react";

const Textarea = ({ rows, cols, placeholder, className, value, onChange }) => {
  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
