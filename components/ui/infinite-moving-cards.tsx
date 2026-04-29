/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    const durations = { fast: "20s", normal: "40s", slow: "120s" };
    containerRef.current.style.setProperty(
      "--animation-duration",
      durations[speed]
    );
  }, [direction, speed]);

  // Clone items once on mount
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      scrollerRef.current!.appendChild(item.cloneNode(true));
    });
    setStart(true);
  }, []);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:paused"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="testimonial-card w-[90vw] max-w-full relative rounded-2xl border shrink-0 dark:border-slate-800 border-slate-200 p-5 md:p-16 md:w-[60vw]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
              ></div>


              <span className="relative z-20 text-sm md:text-lg leading-[1.6] dark:text-white text-slate-800 font-normal">
                {item.quote}
              </span>


              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover object-top" />
                </div>

                <span className="flex flex-col gap-1">

                  <span className="text-xl font-bold leading-[1.6] dark:text-white text-slate-900">
                    {item.name}
                  </span>

                  <span className="text-sm leading-[1.6] dark:text-white-200 text-slate-500 font-normal">
                    {item.title}
                  </span>
                  
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};