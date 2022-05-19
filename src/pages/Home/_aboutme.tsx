import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div id="about">
      <motion.h2
        className="mt-[55vh] md:mt-[55vh] 2xl:mt-[65vh] font-bold text-4xl"
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
      <div className="grid w-full mt-20 lg:justify-between lg:grid-cols-2 md:gap-y-20 gap-y-10">
        <p className="paragraph">
          Je mi šestnáct let a právě studuji šestý ročník na gymnáziu Jaroslava
          Heyrovského. Mezi mé oblíbené předměty patří matiky a fyzika. Ve
          volném čase, když neprogramuju hraju tenis, jezdím na kole a nebo
          hraju lolko. V bodoucnu po maturitě bych chtěl na vysokou školu s
          technickým zaměřením např. robotiku.
        </p>
        <div className="lg:row-span-2 flex justify-center items-center">
          <motion.img
            src="tennis.jpg"
            alt="tenis"
            className="rounded-lg md:h-[270px] h-[150px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div>
          <h3 className="pb-7">Já a programování</h3>
          <p className="paragraph">
            Mezi moje úplné začátky patří legoroboti a poté arduino, což byli
            zájmové kroužky, které jsem navštěvoval. Zde jsem se naučil úplné
            základy a poté jsem pokročil na C# a weby. Webové stránky mě bavily
            nejvíc, jelikož mě bavilo vytvářet snadné webové aplikace pro rodinu
            a kamarády. A u těch jsem také zůstal. Nejvíce z nich jsem se naučil
            během dvouleté distanční výuky, kdy jsem měl dost volného času. Mým
            oblíbeným “nástrojem” pro mobilní aplikace se stal React native s
            typescriptem. Webové aplikace tvořím nejraději s nextjs a nebojím se
            ani backendu a databází.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="pb-10">Moje hlavní dovednosti</h3>
          <div className="flex w-full gap-x-5 flex-wrap gap-y-5 justify-around lg:justify-start">
            <img className="h-10 lg:h-[65px]" src="logos/html.png" alt="html" />
            <img className="h-10 lg:h-[65px]" src="logos/css.png" alt="css" />
            <img
              className="h-10 lg:h-[65px]"
              src="logos/javascript.png"
              alt="javascript"
            />
            <img
              className="h-10 lg:h-[65px]"
              src="logos/react.png"
              alt="react js"
            />
            <img
              className="h-10 lg:h-[65px]"
              src="logos/redux.png"
              alt="redux"
            />
            <img
              className="h-10 lg:h-[65px]"
              src="logos/tailwind-css.png"
              alt="tailwind css"
            />
            <img
              className="h-10 lg:h-[65px]"
              src="logos/figma.png"
              alt="figma"
            />
            <img
              className="h-10 lg:h-[65px]"
              src="logos/nodejs.png"
              alt="node"
            />
            <div className="h-10 lg:h-[65px] text-center text-white text-2xl pt-4">
              Express
            </div>
            <img
              className="h-10 lg:h-[65px]"
              src="logos/mongodb.png"
              alt="mongo"
            />
            <img className="h-10 lg:h-[65px]" src="logos/sql.png" alt="sql" />
            {/* cypress, graphql, appolo, next js,  */}
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}
