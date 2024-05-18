import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
