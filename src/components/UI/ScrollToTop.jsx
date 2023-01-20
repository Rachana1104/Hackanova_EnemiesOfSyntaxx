import React from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  return (
    <div>
      <button
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTop;