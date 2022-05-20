import React, { useState, useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { ProjectType } from "./content";
import { useInView } from "react-intersection-observer";
import useWidth from "../../hooks/useWidth";

interface Props {
  project: ProjectType;
  index: number;
}
export default function ProjectListItem({ project, index }: Props) {
  const { types, titleHtml, forText, title } = project;
  const width =  useWidth(); 
  interface ProjectProps {
    $id: number;
  }
  const [animation, setanimation] = useState("hidden");
  const ProjectBox = tw.div<ProjectProps>`col-start-2 col-span-6 pl-5 lg:p-0 row-span-2 lg:col-span-3 mb-20 lg:mb-60
                                             ${(p) =>
                                               `row-start-${
                                                 width > 1024
                                                   ? p.$id
                                                   : p.$id + (p.$id - 1)
                                               } lg:col-start-${
                                                 p.$id % 2 > 0 ? "1" : "5"
                                               }`} `; // mb - bude se moci animovat
  const Image = tw.img`max-w-[60%] sm:max-w-[40%] rounded-2xl sm:mb-0 mb-5`;
  const Badge = tw.span`px-3 py-1.5 text-xs text-white bg-trbox rounded font-bold `;
  const LinkBox = tw.div`flex flex-col-reverse sm:flex-row items-center justify-between sm:items-start mt-4`;
  const StyledLink = tw(Link)`
  flex gap-x-2 text-link hover:text-blue-700 active:text-indigo-800 items-center cursor-pointer`;
  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -400 : 400 },
    visible: { opacity: 1, x: 0 },
  };

  
  if (!project) return null;
  return (
    <ProjectBox $id={index + 1} key={index}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -400 : 400 }}
        transition={{ type: "spring", mass: 0.5, delay: index * 0.1 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Badge>{types}</Badge>
        {titleHtml}
        <p className="paragraph mt-5 ">{forText}</p>
        <LinkBox>
          <StyledLink to={`/davidkristek-website/my-work/${title}`}>
            <div>Více informacía</div>
            <BsArrowRight className="text-2xl pt-[1px] " />
          </StyledLink>
          <Image src={project.forImage} />
        </LinkBox>
      </motion.div>
    </ProjectBox>
  );
}
// https://blog.logrocket.com/react-scroll-animations-framer-motion/
