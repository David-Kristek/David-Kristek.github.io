import React from "react";
import Navigation from "../../components/Navigation";
import AboutMe from "./AboutMe";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
    </>
  );
}
