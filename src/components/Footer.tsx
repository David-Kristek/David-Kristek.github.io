import React from "react";

export default function Footer() {
  return (
    <div className=" mt-auto">
      <div className="bg-[#0A0D17] h-20 flex justify-center gap-x-10 items-center sm:flex-row flex-col gap-y-2">
        <span className="text-white">Vyvořeno Davidem Křístem</span>
        <a href="mailto: david.kristek05@gmail.com" className="text-[#4F75FF]">
          david.kristek05@gmail.com
        </a>
      </div>
    </div>
  );
}
