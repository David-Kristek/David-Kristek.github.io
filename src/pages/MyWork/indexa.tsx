import React from "react";
import Mobile from "./Mobile";
import { FaRegCalendarAlt } from "react-icons/fa";
import Monitor from "./Monitor";

export default function MyWork() {
  return (
    <div className="mb-[80vh] container mt-20">
      <h2 className="">Moje projekty</h2>
      <span className="h-underline w-[200px]" />

      <div className="md:mt-[160px] relative">
        <a href="#" className="absolute right-0 top-[-5px]" title="Github">
          <img
            src="/logos/github.png"
            alt="github"
            className="h-[40px] opacity-60 transition-all hover:opacity-100"
          />
        </a>
        <div className="flex justify-center gap-x-2 items-center">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <h3 className="text-2xl">Písemkář</h3>
        </div>
        <hr className="mt-5 rounded-sm opacity-50" />
        <div className="flex w-full justify-around pt-10">
          <ul className="list-disc	text-textl xl:max-w-[50%] mt-10 md:text-lg">
            <li>moje nejnovější a nejlepší mobilní aplikace </li>
            <li>nyní plně v provozu, server hostovaný na heroku</li>
            <li>
              vytvoření vlastní skupiny, a zde možnost přidávat do vlastně
              <br />
              vygenerované kalenáře následující testy, domácí úkoly
            </li>
            <li>čistý a přehledný kod, animace, přátelské rozhraní</li>
            <li>není zde nutnost hesla - authentikace pomocí emailu</li>
            <li>spolupráce s Bakaláři API - rozvrhy pro jednotlivé dny</li>
          </ul>
          <div className="flex gap-x-10">
            <Mobile app="pisemkar" />
            <Mobile app="pisemkar" />
          </div>
        </div>
      </div>
      <div className="md:mt-[160px] relative">
        <a href="#" className="absolute right-0" title="Github">
          <img
            src="/logos/github.png"
            alt="github"
            className="h-[40px] opacity-60 transition-all hover:opacity-100"
          />
        </a>
        <a href="#" className="absolute right-14" title="Github">
          <img
            alt="github"
            className="h-[40px] opacity-60 transition-all hover:opacity-100"
          />
        </a>
        <div className="flex justify-center gap-x-2 items-center">
          <img
            src="/logos/simple-social.png"
            alt="Simple social"
            className="h-[45px]"
          />
        </div>
        <hr className="mt-5 rounded-sm opacity-50" />
        <div className="flex w-full justify-around pt-10 flex-row-reverse">
          <ul className="list-disc	text-textl xl:max-w-[50%] mt-10 md:text-lg">
            <li>simple social je moje sociální síť inspirovaná instagramem</li>
            <li>
              content sdílíte jenom se se svojí skupinou, ve které jste
              připojeni
            </li>
            <li>obrázky jsou uchovávány na cloudinary - lepší optimalizace</li>
            <li>
              dříve jsem plánoval jenom jako webové stránky, ale poté jsem
              přešel na mobilní apku{" "}
            </li>
            <li>na webu je možnost google authentikace a Mapy.cz API</li>
            <li>
              na tadytom projektu jsem se učil react js, takže je tu určitě mnoho
              věcí, které bych v kódu změnil
            </li>
          </ul>
          <div className="flex gap-x-10">
            <Mobile app="pisemkar" />
            <Mobile app="pisemkar" />
          </div>
        </div>
        <div className="mt-10 flex justify-around">
          <Monitor />
          <Monitor />
        </div>
      </div>
    </div>
  );
}
