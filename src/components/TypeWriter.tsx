import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  const [timer, setTimer] = useState({ char: 0, sent: 0 });
  const sentences = [
    "I`m web, mobile app developer",
    "Student na Gymnáziu Jaroslava Heyrovského",
    "Hello guys how are you doin",
  ];
  const timerHandler = () =>
    setTimer((time) => {
      var char = 0;
      var sent = 0;
      // délka věty je menší než příští charakter
      if (sentences[time.sent].length < time.char + 1) {
        // délka vět je menší než příští věta

        if (sentences.length < time.sent + 2) {
          return { char, sent };
        }
        sent = time.sent + 1;
        return { char, sent };
      }
      char = time.char + 1;
      return { char, sent: time.sent };
    });
  useEffect(() => {
    const id = setInterval(timerHandler, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="text-textl text-2xl mt-5 h-8">
      {sentences[timer.sent].split("").map((character, index) => {
        if (index < timer.char) return <span key={index}>{character}</span>;
      })}
      <span className="w-[3px] h-7 bg-white relative inline-block top-[5px] left-2 rounded-md pulsing" />
    </p>
  );
}
