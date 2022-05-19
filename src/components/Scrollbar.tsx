import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Scrollbar() {
  const div = useRef<HTMLDivElement>(null);
  const { height } = useWindowDimensions();
  const pageHeight = document.documentElement.offsetHeight;
  const [size, setSize] = useState(
    (window.innerHeight / pageHeight) * window.innerHeight
  );
  const [top, setTop] = useState(0);
  function handleSize() {
    console.log(
      (window.innerHeight / pageHeight) * window.innerHeight,
      window.innerHeight / document.documentElement.offsetHeight
    );
    setSize((window.innerHeight / pageHeight) * window.innerHeight);
  }
  useEffect(() => {
    function onScroll() {
      setTop(window.scrollY);
      
    }
    window.addEventListener("resize", handleSize);
    window.addEventListener("scroll", onScroll);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <div
      className={`fixed right-0 bg-black w-5`}
      ref={div}
      style={{ height: size, top }}
    />
  );
}
