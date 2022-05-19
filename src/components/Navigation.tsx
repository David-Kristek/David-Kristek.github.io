import React, { ReactNode } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { MdDirectionsBike } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import Scrollspy from "react-scrollspy";
export default function Navigation() {
  return (
    <div className="fixed top-0 left-[2%] h-full z-50 hidden 2xl:block">
      <div className="flex h-full items-center">
        <Scrollspy
          className="relative bg-purple text-white rounded-3xl text-2xl opacity-50 hover:opacity-80"
          items={["home", "about", "life", "coding", "skills"]}
          currentClassName="active"
        >
          <Line>
            <a href="#home">
              <ImHome className="mx-3 my-5 cursor-pointer hover:scale-125 transition-all" />
            </a>
          </Line>
          <Line>
            <a href="#about">
              <BsFillPersonFill className="mx-3 my-5 cursor-pointer hover:scale-125 transition-all" />
            </a>
          </Line>
          <Line>
            <a href="#life">
              <MdDirectionsBike className="mx-3 my-5 cursor-pointer hover:scale-125 transition-all" />
            </a>
          </Line>
          <Line>
            <a href="#coding">
              <RiComputerFill className="mx-3 my-5 cursor-pointer hover:scale-125 transition-all" />
            </a>
          </Line>
          <Line>
            <a href="#skills">
              <SiJavascript className="mx-3 my-5 cursor-pointer hover:scale-125 transition-all" />
            </a>
          </Line>
        </Scrollspy>
      </div>
    </div>
  );
}
function Line({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative group`}>
      {children}
      <div className="absolute flex items-center h-full left-0 top-0 ">
        <div
          className={`absolute  group-hover:h-4 ${
            className === "active" ? "h-6" : " h-0"
          }  w-1 bg-white rounded-tr-2xl rounded-br-2xl transition-all duration-500`}
        ></div>
      </div>
    </div>
  );
}
