import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useScroll from "../../hooks/useScroll";
import { ParallaxBanner } from "react-scroll-parallax";
import useWidth from "../../hooks/useWidth";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function AboutMe() {
  const scroll = useScroll();
  const width = useWidth();
  return (
    <div className="pb-[100px] pt-[15vh]  2xl:pt-[35vh] md:pt-[30vh] ">
      <div className="container  pt-[31vh]" id="about">
        <div className="2xl:px-[15%] grid grid-cols-2 w-full justify-between mt-5">
          <div className="mx-[5%] md:col-span-2 mb-24 md:mb-44">
            <motion.h2
              className="font-bold text-2xl md:text-4xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              ABOUT ME
            </motion.h2>
            <motion.span
              className="h-underline w-[90px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            />
          </div>
          <div className="flex text-white text-sm md:text-xl gap-x-[5vw] ">
            <div className="font-bold grid gap-y-3">
              <div>Narozeniny</div>
              <div>Věk</div>
              <div>Zaměření</div>
              <div>Bydliště</div>
              <div>E-mail</div>
            </div>
            <div className="grid gap-y-3">
              <div>13. 6. 2005</div>
              <div>17 let (za {Math.ceil((new Date(2022, 5, 13).getTime() - new Date().getTime()) / 82800000)} dní)</div>
              <div>Fullstack javascript (React)</div>
              <div>Praha</div>
              <div>david.kristek05@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center justify-center row-start-1  col-start-2 md:row-start-2 md:col-start-2 relative">
            <img src="Profile.png" alt="profile" className="h-28 md:h-56" />
            <motion.img
              src="sunglasses.png"
              alt="glasses"
              initial={{ y: 0 }}
              whileInView={{ y: width > 768 ? 51 : 32 }}
              transition={{ delay: 1 }}
              // top-[${ // scroll < 705 ? "0" : "51"  51}px]
              className={`h-6 md:h-11 absolute top-0`}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      <ParallaxBanner
        id="life"
        layers={[
          {
            image: "bike.jpg",
            speed: -35,
          },
          {
            children: (
              <div className="text-[#b8b7b7] container flex h-full items-center pl-[10%]">
                <div>
                  <h2 className="pb-8 font-bold md:text-[40px] md:text-3xl">
                    Život
                  </h2>
                  <div className="xl:max-w-[50%] md:text-xl text-base">
                    <p className="pb-4">
                      Právě studuji šestý ročník na gymnáziu Jaroslava
                      Heyrovského. Mezi mé oblíbené předměty patří matiky a
                      fyzika. Ve volném čase, když neprogramuju hraju tenis,
                      jezdím na kole a nebo hraju hry.
                    </p>
                    <p>
                      V bodoucnu po maturitě bych chtěl na vysokou školu s
                      technickým zaměřením např. programování nebo robotiku.
                    </p>
                  </div>
                </div>
              </div>
            ),
            speed: -10,
          },
        ]}
        className="h-[100vh] md:mt-60 mt-32"
      />
      <ParallaxBanner
        id="coding"
        layers={[
          {
            image: "computer.jpg",
          },
          {
            speed: -10,
            children: (
              <div className="text-[#b8b7b7] container flex h-full items-center pl-[10%]">
                <div>
                  <h2 className="pb-8 font-bold md:text-[40px] md:text-3xl">
                    Programování
                  </h2>
                  <div className="xl:max-w-[50%] md:text-xl text-base">
                    <p className="pb-4">
                      Mezi moje úplné začátky patří legoroboti a poté arduino,
                      což byli zájmové kroužky, které jsem navšťěvoval. Zde jsem
                      se naučil úplné základy a poté jsem pokročil na C# a weby.
                      Webové stránky mě bavily nejvíc, jelikož mě bavilo
                      vytvářet snadné webové aplikace pro rodinu a kamarády. A u
                      těch jsem také zůstal. Mnoho z nich jsem se naučil během
                      dvouleté distanční výuky, kdy jsem měl dost volného času.
                    </p>
                    <p>
                      Mým oblíbeným “nástrojem” pro weby se stal React s
                      typescriptem a baví mě i backend s databázemi. V budoucnu bych
                      chtěl se chtěl volnočasově věnovat programování webových
                      aplikací pro nějakou firmu.
                    </p>
                    <a href="https://github.com/David-Kristek"  className="pt-4 flex items-center gap-x-2" target="_blank" rel="noopener noreferrer">
                      
                      Github
                      <img
                        src="logos/github.png"
                        alt="github"
                        className="h-6"
                      />
                    </a>
                    <Link
                      className="button inline-block  mt-8 bg-[#3150ca9b] py-2"
                      to="/my-work"
                    >
                      <div className="flex gap-x-2 items-center">
                        Moje projekty
                        <AiOutlineArrowRight className="text-3xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
        style={{ height: "100vh", marginTop: "0px" }}
      />

      <div className="md:pt-60 pt-32 container pl-[10%]" id="skills">
        <h2>Hlavní zkušenosti</h2>
        <div className="h-underline" />
        <div className="flex w-full gap-x-5 flex-wrap gap-y-5 justify-around lg:justify-start mt-24">
          <img className="h-14 lg:h-20" src="logos/html.png" alt="html" />
          <img className="h-14 lg:h-20" src="logos/css.png" alt="css" />
          <img
            className="h-14 lg:h-20"
            src="logos/javascript.png"
            alt="javascript"
          />
          <img
            className="h-14 lg:h-20"
            src="logos/typescript.png"
            alt="typescript"
          />
          <img
            className="h-14 lg:h-20"
            src="logos/react.png"
            alt="react js"
          />
          <img className="h-14 lg:h-20" src="logos/redux.png" alt="redux" />
          <img
            className="h-14 lg:h-20"
            src="logos/tailwind-css.png"
            alt="tailwind css"
          />
          <img className="h-14 lg:h-20" src="logos/figma.png" alt="figma" />
          <img className="h-14 lg:h-20" src="logos/nodejs.png" alt="node" />
          <div className="h-14 lg:h-20 text-center text-white text-2xl pt-4">
            Express
          </div>
          <img
            className="h-14 lg:h-20"
            src="logos/mongodb.png"
            alt="mongo"
          />
          <img className="h-14 lg:h-20" src="logos/next-js.svg" alt="next-js" title="Next JS"/>
          <img className="h-14 lg:h-20" src="logos/sql.png" alt="sql" />
          {/* cypress, graphql, appolo, next js,  */}
          <img className="h-14 lg:h-20" src="logos/cypress.svg" alt="cypress" title="cypress"/>
          <img className="h-14 lg:h-20" src="logos/graphql.png" alt="graphql" />
          <img className="h-14 lg:h-20" src="logos/apollo.svg" alt="apollo" title="Apollo GraphQL"/>
        </div>
      </div>
    </div>
  );
}
