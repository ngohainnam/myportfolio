/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20 bg-background" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-blue">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-80 gap-y-50 px-8 lg:px-16 mt-25 place-items-center w-full max-w-350 mx-auto">
        {projects.map((item) => (
          <div
            className="h-80 w-full flex items-center justify-center"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              containerClassName="w-full h-full"
              className="w-full"
            >
              {/* Project image */}
              <div className="relative w-full overflow-hidden rounded-xl h-[24vh] lg:h-[28vh] mb-4">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 dark:text-white text-black">
                {item.title}
              </h1>

              {/* Description */}
              <p className="lg:text-sm font-light text-xs line-clamp-2 mt-1 dark:text-white/80 text-black/80">
                {item.des}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 border dark:border-white/10 border-black/10 rounded-full dark:bg-[rgba(17,25,40,0.8)] bg-slate-100 px-3 py-1"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4 invert dark:invert-0" />
                    <span className="text-xs dark:text-white/70 text-black/70 whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-sm text-xs text-blue">Check Live Site</p>
                  <FaLocationArrow className="ms-2" color="blue" size={12} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;