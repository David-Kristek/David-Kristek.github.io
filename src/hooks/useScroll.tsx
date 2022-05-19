import React, { useState, useEffect } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(window.pageYOffset);
  useEffect(() => {
    const updateWindowDimensions = () => {
      setScroll(window.pageYOffset);
    };

    window.addEventListener("scroll", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return scroll;
}
