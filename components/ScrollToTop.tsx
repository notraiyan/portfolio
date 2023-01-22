import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
