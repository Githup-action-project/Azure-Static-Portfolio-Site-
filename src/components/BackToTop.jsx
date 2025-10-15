
import React from "react";
import logo from "../assets/Edustuskuva.png";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-2 rounded-full shadow-lg hover:scale-110 transition"
      aria-label="Back to Top"
    >
      <img
        src={logo}
        alt="Back to Top"
        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
      />
    </button>
  );
}

export default BackToTop;
