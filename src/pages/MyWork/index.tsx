import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import tw from "tailwind-styled-components";
import projects from "./content";
import { motion } from "framer-motion";
import ProjectListItem from "./ProjectListItem";
import useWidth from "../../hooks/useWidth";

export default function MyWork() {
  const width = useWidth();
  interface ProjectProps {
    $id: number;
  }
  const Section = tw.section`container mt-20 grid grid-cols-7`;
  const TimeLiner = tw.div`mx-auto bg-[#E5E7EB] h-full w-2`;
  const TimeLineBox = tw.div`relative col-start-1 lg:col-start-4 row-start-1 lg:row-end-[8] row-end-[16] z-0 lg:mt-8 mt-12`;
  const Circle = tw.div<ProjectProps>`col-start-1 lg:col-start-4 h-10 w-10 lg:h-14 lg:w-14 bg-lblue  rounded-full mx-auto z-10 mt-10 lg:mt-7 flex
                                      ${(p) =>
                                        `row-start-${
                                          width > 768
                                            ? p.$id
                                            : p.$id + (p.$id - 1)
                                        }`}`;

  return (
    <div className=" max-w-full overflow-hidden">
      <Section>
        {projects.map((project, index) => (
          <ProjectListItem project={project} index={index} key={index} />
        ))}
        {projects.map((project, index) => (
          <Circle
            $id={index + 1}
            key={index}
            style={{
              gridRowStart: width > 768 ? index + 1 : index + 1 + index,
            }}
          >
            {project.icon}
          </Circle>
        ))}
        <TimeLineBox>
          <TimeLiner> </TimeLiner>
        </TimeLineBox>
      </Section>
    </div>
  );
}
