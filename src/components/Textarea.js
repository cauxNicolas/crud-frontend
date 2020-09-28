import React from "react";

const Textarea = ({ rows, cols, placeholder }) => {
  return (
    <div>
      <textarea rows={rows} cols={cols} placeholder={placeholder} />
    </div>
  );
};

export default Textarea;
