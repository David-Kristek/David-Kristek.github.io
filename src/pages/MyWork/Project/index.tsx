import React from "react";
import { useParams } from "react-router-dom";
import projects from "../content";
import Mobile from "../Mobile";
import Monitor from "../Monitor";
import { motion } from "framer-motion";
export default function Project() {
  let { title } = useParams();
  let project = projects.find((project) => project.title === title);
  if (!project) return <></>;
  const { titleHtml, mainText, ul, githubLinks, types } = project;
    return (
      <div className="mt-20 container min-h-[80vh]">
        <div className="flex w-full justify-between">
          {titleHtml}
          <div className="flex gap-x-4">
            {githubLinks.map((link, index) => (
              <a href={`https://github.com/${link}`} key={index} target="_blank" rel="noopener noreferrer" >
                <img
                  src="/davidkristek-website/logos/github.png"
                  alt={link}
                  className="h-12 cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 h-[1px] w-full bg-[#3E65FB]" />
        {types === "WEBOVÁ APLIKACE" ? (
          <motion.div
            className="mt-20 grid lg:grid-cols-2 text-gray-400 md:text-base text-sm gap-y-10 mb-[158px] xl:gap-x-10"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Monitor
              className="row-span-2  lg:row-start-1 row-start-2 mb-20"
              app={title}
            />

            <p className="lg:mt-10  xl:px-5 md:pl-10 ">
              {mainText}
            </p>
            <ul className="md:pl-10 mb-20  px-5 list-disc ">
              {ul[0] && ul.map((item) => (
                <li> {item}</li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.div
            className="mt-10 grid md:grid-cols-3 xl:px-[5vw] text-gray-400 md:text-base text-sm gap-y-10 mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Mobile
              app={project.title}
              className="md:row-span-2 md:row-start-1 row-start-2"
            />
            <p className="md:mt-20 md:col-span-2 xl:px-5 pl-10">{mainText}</p>
            <ul className="pl-10 mb-20 md:col-span-2 px-5 list-disc ">
              {ul[0] && ul.map((item) => (
                <li> {item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    );
}
