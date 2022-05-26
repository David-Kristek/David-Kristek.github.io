import React, { useState, useEffect } from "react";
import { DeviceProps } from "./Project";

export default function Monitor({ className, app, setLoaded }: DeviceProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const [noImg, setNoImg] = useState(false);
  const images = [1, 2, 3];
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((imgIndex) => (imgIndex === 2 ? 0 : imgIndex + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [imgIndex]);
  if (noImg) return <></>;
  return (
    <div className={`${className} w-full  mx-auto relative`}>
      <div
        className={`relative bg-black border-black border-[20px] rounded-md overflow-hidden `}
      >
        <img src="/windows.jpg" alt="windows" />
        {images.map((image, index) => {
          var className = "";
          if (index === imgIndex + 1) className = "translate-x-full";
          if (index === imgIndex + 2) className = "translate-x-[200%]";
          if (index === imgIndex - 1) className = "-translate-x-full";
          if (index === imgIndex - 2) className = "-translate-x-[200%]";
          return (
            <img
              src={`/projects/${app}/${app}${image}.jpg`}
              alt="písemkář"
              className={`absolute inset-0 transition-all duration-300 ${className}`}
              key={index}
              onLoad={() => setLoaded(true)}
              onError={() => {
                {
                  setNoImg(true);
                  setLoaded(true);
                }
              }}
            />
          );
        })}
        <div className="absolute bottom-2 inset-x-0 mx-[40%] flex justify-around">
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
      <div className="h-20">
        <div className="absolute flex justify-end w-full gap-x-2 -translate-y-3 -translate-x-5">
          <div className="h-1.5 w-4 rounded-md bg-gray-500 right-0" />
          <div className="h-1.5 w-4 rounded-md bg-gray-500 right-6" />
        </div>
        <div className="absolute inset-x-0">
          <div className="h-[60px] w-[8%] mx-auto bg-gray-500" />
          <div className="h-5 w-[50%] bg-black mx-auto  rounded-t-lg" />
          <div className="h-[1px] w-[50%] mx-auto bg-gray-500" />
        </div>
      </div>
    </div>
  );
}
