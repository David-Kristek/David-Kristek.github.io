import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

export default function MyWork() {
  const Section = tw.section`container mt-20 grid grid-cols-7 mb-[100vh]`;
  const ProjectBox = tw.div`mb-20 `;
  const Badge = tw.span`px-3 py-1.5 text-xs text-white bg-trbox rounded font-bold `;
  return (
    <Section className="container mt-20 grid grid-cols-7 mb-[100vh]">
      <ProjectBox className="col-span-3 row-span-2">
        <span className="">MOBILNÍ APLIKACE</span>
        <div className="flex gap-x-2 items-center mt-5">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <h3 className="text-2xl">Písemkář</h3>
        </div>
        <p className="paragraph mt-5">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb et...
        </p>
        <div className="flex  justify-between items-start mt-4">
          <Link
            to="#"
            className="flex gap-x-2 text-link hover:text-blue-700 active:text-indigo-800 items-center cursor-pointer"
          >
            <div>Více informací</div>
            <BsArrowRight className="text-2xl pt-[1px] " />
          </Link>
          <img
            src="projects/pisemkar-for.jpg"
            className="max-w-[40%] rounded-2xl"
          />
        </div>
      </ProjectBox>
      <ProjectBox className="col-start-5 col-span-3 row-start-2 row-span-2">
        <span className="px-3 py-1.5 text-xs text-white bg-trbox rounded font-bold">
          MOBILNÍ APLIKACE
        </span>
        <div className="flex gap-x-2 items-center mt-5">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <h3 className="text-2xl">Písemkář</h3>
        </div>
        <p className="paragraph mt-5">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb et...
        </p>
        <div className="flex  justify-between items-start mt-4">
          <Link
            to="#"
            className="flex gap-x-2 text-link hover:text-blue-700 active:text-indigo-800 items-center cursor-pointer"
          >
            <div>Více informací</div>
            <BsArrowRight className="text-2xl pt-[1px] " />
          </Link>
          <img
            src="projects/pisemkar-for.jpg"
            className="max-w-[40%] rounded-2xl"
          />
        </div>
      </ProjectBox>
      <ProjectBox className="row-start-3 col-start-1 col-span-3 row-span-2">
        <span className="px-3 py-1.5 text-xs text-white bg-trbox rounded font-bold">
          MOBILNÍ APLIKACE
        </span>
        <div className="flex gap-x-2 items-center mt-5">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <h3 className="text-2xl">Písemkář</h3>
        </div>
        <p className="paragraph mt-5">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb et...
        </p>
        <div className="flex  justify-between items-start mt-4">
          <Link
            to="#"
            className="flex gap-x-2 text-link hover:text-blue-700 active:text-indigo-800 items-center cursor-pointer"
          >
            <div>Více informací</div>
            <BsArrowRight className="text-2xl pt-[1px] " />
          </Link>
          <img
            src="projects/pisemkar-for.jpg"
            className="max-w-[40%] rounded-2xl"
          />
        </div>
      </ProjectBox>
      <ProjectBox className="row-start-4 col-start-5 col-span-3 row-span-2">
        <span className="px-3 py-1.5 text-xs text-white bg-trbox rounded font-bold">
          MOBILNÍ APLIKACE
        </span>
        <div className="flex gap-x-2 items-center mt-5">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <h3 className="text-2xl">Písemkář</h3>
        </div>
        <p className="paragraph mt-5">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb et...
        </p>
        <div className="flex  justify-between items-start mt-4">
          <Link
            to="#"
            className="flex gap-x-2 text-link hover:text-blue-700 active:text-indigo-800 items-center cursor-pointer"
          >
            <div>Více informací</div>
            <BsArrowRight className="text-2xl pt-[1px] " />
          </Link>
          <img
            src="projects/pisemkar-for.jpg"
            className="max-w-[40%] rounded-2xl"
          />
        </div>
      </ProjectBox>
      <ProjectBox className="row-start-5 col-span-3 row-span-2">
        <span className="px-3 py-1.5 text-xs text-white bg-trbox rounded font-bold">
          MOBILNÍ APLIKACE
        </span>
        <div className="flex gap-x-2 items-center mt-5">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <h3 className="text-2xl">Písemkář</h3>
        </div>
        <p className="paragraph mt-5">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb et...
        </p>
        <div className="flex  justify-between items-start mt-4">
          <Link
            to="#"
            className="flex gap-x-2 text-link hover:text-blue-700 active:text-indigo-800 items-center cursor-pointer"
          >
            <div>Více informací</div>
            <BsArrowRight className="text-2xl pt-[1px] " />
          </Link>
          <img
            src="projects/pisemkar-for.jpg"
            className="max-w-[40%] rounded-2xl"
          />
        </div>
      </ProjectBox>
      <div className="relative h-14 w-14 col-start-4 bg-lblue row-start-1 rounded-full mx-auto z-10 top-[-5px] mt-7 flex">
        <FaRegCalendarAlt className="text-white text-3xl m-auto" />
      </div>
      <div className="relative col-start-4 row-span-4 row-start-1 z-0 mt-7">
        <div className="mx-auto bg-[#E5E7EB] h-full w-2" />
      </div>
    </Section>
  );
}
