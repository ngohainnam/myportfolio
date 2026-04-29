/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import GridGlobe from "./ui//GridGlobe";

const techStack = [
  { name: "Python", icon: "/python.svg" },
  { name: "Next.js", icon: "/nextdotjs.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
  { name: "Node.js", icon: "/nodedotjs.svg" },
  { name: "FastAPI", icon: "/fastapi.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "LangChain", icon: "/langchain.svg" },
  { name: "Google Gemini", icon: "/googlegemini.svg" },
  { name: "AWS S3", icon: "/amazons3.svg" },
  { name: "Prisma", icon: "/prisma.svg" },
  { name: "shadcn/ui", icon: "/shadcnui.svg" },
  { name: "Vercel", icon: "/vercel.svg" },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border dark:border-white/10 border-black/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bento-card",
        className
      )}
    >
      <div className="h-full">
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className="absolute right-0 -bottom-5">
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 dark:text-white text-black">
            {title}
          </div>

          <div className={cn("font-sans font-light dark:text-white/80 text-black z-10", id === 1 ? "mt-3 w-full max-w-full text-sm lg:text-base leading-snug" : "md:max-w-32 md:text-xs lg:text-base text-sm")}>
            {id === 1 && typeof description === "string"
              ? description.split("\n").map((line, i) => (
                  <p key={i} className="mb-1.5">{line}</p>
                ))
              : description}
          </div>

          {id === 2 && (
            <div className="opacity-75">
              <GridGlobe />
            </div>
          )}

          {id === 3 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 bg-black dark:bg-white"
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 invert-0 dark:invert" />
                  <span className="text-xs font-medium whitespace-nowrap text-white dark:text-black">{tech.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
