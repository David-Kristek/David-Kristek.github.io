import React, { useState, Suspense, useEffect } from "react";
import Logo from "./Logo";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import { GiHamburgerMenu } from "react-icons/gi";
// https://react-icons.github.io/react-icons/
import { ImCross } from "react-icons/im";
import { Link, Router, useLocation } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

softShadows();
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((curr) => !curr);
  };
  const { pathname } = useLocation();
  const windowDimensions = useWindowDimensions();
  useEffect(() => {
    setMobileMenu(false); 
  }, [pathname])
  return (
    <header className="sm:bg-transparent w-full z-50">
      <div className="container px-0 sm:px-5 sm:pd-0 sm:flex justify-between items-center relative h-[65px] sm:h-[85px]">
        <div className="bg-mobilemenu z-10 relative sm:bg-transparent pb-2  ">
        <img src="/logo.png" alt="logo" className="relative md:h-24 h-14 top-1 md:top-5"/>
          {mobileMenu ? (
            <ImCross className="mobile-icon text-purple" size={30} onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu
              className="mobile-icon text-purple"
              size={35}
              onClick={toggleMenu}
            />
          )}
        </div>
        <nav
          className="pt-4 pb-4 sm:flex sm:pt-2 sm:pb-0 relative transition-all duration-500 bg-mobilemenu z-0 sm:bg-transparent"
          style={{
            top: !mobileMenu && window.innerWidth < 640 ? "-220px" : "0px",
          }}
        >
          <Link
            to="/"
            className={`nav-item group ${pathname === "/" ? "active" : ""}`}
          >
            Domů
            <span
              className={`nav-underline ${
                pathname === "/" ? "nav-underlined " : ""
              }`}
            />
          </Link>
          <Link
            to="my-work"
            className={`nav-item group ${
              pathname.includes("/my-work") ? "active" : ""
            }`}
          >
            Moje projekty
            <span
              className={`nav-underline ${
                pathname.includes("/my-work") ? "nav-underlined " : ""
              }`}
            />
          </Link>
          <Link to="/contact" className="nav-item group button sm:my-0 my-3 sm:block">
            Kontakt
          </Link>
        </nav>
      </div>

    </header>
  );
}
