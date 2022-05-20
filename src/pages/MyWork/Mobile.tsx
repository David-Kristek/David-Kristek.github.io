import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { motion } from "framer-motion";
interface Props {
  app: string;
  className?: string;
}
// https://www.framer.com/docs/examples/
// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx:2210-2222
export default function Mobile({ app, className }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [load, setLoad] = useState(false); 
  const images = [1, 2, 3];
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((imgIndex) => (imgIndex === 2 ? 0 : imgIndex + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [imgIndex]);
  return (
    <div
      className={`relative lg:h-[686px] lg:w-[342px] h-[500px] w-[250px] bg-black lg:rounded-[45px] rounded-[35px] shadow-xl overflow-hidden lg:border-[12px] border-[10px] border-black ${className} mx-auto lg:mx-0 ${!load && "hidden"}`}
    >
      {images.map((image, index) => {
        var className = "";
        if (index === imgIndex + 1) className = "translate-x-full";
        if (index === imgIndex + 2) className = "translate-x-[200%]";
        if (index === imgIndex - 1) className = "-translate-x-full";
        if (index === imgIndex - 2) className = "-translate-x-[200%]";
        return (
          <img
            src={`/davidkristek-website/projects/${app}/${app}${image}.jpg`}
            alt="písemkář"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-300 ${className}`}
            key={index}
            onLoad={()=> setLoad(true)}
          />
        );
      })}

      <div className="absolute top-0 inset-x-0">
        <div className="lg:h-5 h-4 lg:w-40 w-24 mx-auto bg-black rounded-b-lg"></div>
      </div>
      <div className="absolute bottom-2 inset-x-0 mx-[35%] flex justify-around">
        <div
          className={`w-5 h-5 rounded-full  cursor-pointer hover:scale-110 active:scale-95 ${
            imgIndex === 0 ? "bg-black" : "bg-gray-500"
          }`}
          onClick={() => setImgIndex(0)}
        />
        <div
          className={`w-5 h-5 rounded-full  cursor-pointer hover:scale-110 active:scale-95 ${
            imgIndex === 1 ? "bg-black" : "bg-gray-500"
          }`}
          onClick={() => setImgIndex(1)}
        />
        <div
          className={`w-5 h-5 rounded-full  cursor-pointer hover:scale-110 active:scale-95 ${
            imgIndex === 2 ? "bg-black" : "bg-gray-500"
          }`}
          onClick={() => setImgIndex(2)}
        />
      </div>
    </div>
  );
}
