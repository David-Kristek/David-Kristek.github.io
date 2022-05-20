import React, { useState, useEffect, Suspense, useMemo } from "react";
import Typewriter from "typewriter-effect";
import { Canvas } from "@react-three/fiber";
// import Cat from "../../components/Cat";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Dragon from "./Dragon";
import { VscChevronDown } from "react-icons/vsc";
export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const sentences = [
    "Nadšený web, mobile app developer",
    "Student na Gymnáziu Jaroslava Heyrovského",
    "Milovník nových technologií",
  ];
  const resp = useMemo(() => width > 1040, [width]);

  return (
    <div className="container" id="home">
      <div className="mt-[20vw] sm:mt-[150px] sm:flex justify-between relative">
        <div className="flex flex-col  items-center sm:items-start  z-0">
          <motion.h1
            className="text-4xl sm:text-6xl text-white pt-5 inline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            David Křístek
          </motion.h1>

          <div className="mt-5" />
          <Typewriter
            options={{
              strings: sentences,
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              cursorClassName: "text-white pulsing sm:text-lg md:text-2xl",
              wrapperClassName: "text-textl  text-lg sm:text-2xl h-8",
              delay: 150,
              //   pauseFor: 5000,
            }}
          />
          {/* <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            href="#about"
            className="button mt-[50px] py-2"
          >
            Více informací  
          </motion.a> */}
        </div>
      </div>
      {/* <div className="h-[30vh] lg:h-0"/> */}
      {/* w-[calc(100vw - 2.5rem)] */}
      <div className="absolute top-90 lg:top-20  right-0 lg:h-[80vh] h-[50vh] lg:w-[75vw] w-full mt-8 ">
        <Canvas
          shadows
          camera={{ position: [0, 0, 85], rotation: [0, 20, 0] }}
          // className="absolute z-20 top-0 right-0"
          //
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <group>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
              receiveShadow
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              {/* <meshStandardMaterial color={"orange"} /> */}
              <shadowMaterial attach="material" />
            </mesh>
            <Suspense fallback={null}>
              <Dragon width={width} />
            </Suspense>
          </group>
        </Canvas>
      </div>
      <div className="absolute bottom-10 w-full left-0 hidden lg:block">
        <a href="#about">
          <VscChevronDown
            size={80}
            className="scale-x-[1.5] hover:scale-x-[2] text-purple mx-auto cursor-pointer transition-all"
          />
        </a>
      </div>
    </div>
  );
}
