"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuFileText } from "react-icons/lu";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ngohainnam",
    icon: <FaGithub size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ngohainnam",
    icon: <FaLinkedin size={18} />,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: <LuFileText size={18} />,
  },
  {
    label: "Email",
    href: "mailto:ngohainnam@gmail.com",
    icon: <HiOutlineMail size={18} />,
  },
];

const FloatingBottomBar = () => {
  return (
    <div className="fixed bottom-6 inset-x-0 z-5000 flex justify-center pointer-events-none">
      <div
        className="glass-nav flex items-center gap-1 px-4 py-3 rounded-2xl pointer-events-auto shadow-[0px_4px_24px_rgba(0,0,0,0.4)]"
      >
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl dark:text-white/70 text-slate-600 dark:hover:text-white hover:text-slate-900 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 text-sm font-medium"
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
        <div className="w-px h-6 dark:bg-white/20 bg-black/20 mx-1" />
        <AnimatedThemeToggler className="flex items-center justify-center px-4 py-2 rounded-xl dark:text-white/70 text-slate-600 dark:hover:text-white hover:text-slate-900 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200" />
      </div>
    </div>
  );
};

export default FloatingBottomBar;
