import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import MyWork from "./pages/MyWork";
import Footer from "./components/Footer";
import Project from "./pages/MyWork/Project";
import Contact from "./pages/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-[100vh] flex flex-col">
        <Header />
        {/* <ScrollToTop>
          <Routes>
            <Route path="/davidkristek-website/" element={<Home />} />
            <Route path="/davidkristek-website/my-work" element={<MyWork />} />
            <Route path="/davidkristek-website/my-work/:title" element={<Project />} />
            <Route path="/davidkristek-website/contact" element={<Contact />} />
            <Route path="/davidkristek-website/*" element={<Navigate replace to="/davidkristek-website/" />} />
          </Routes>
        </ScrollToTop> */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
