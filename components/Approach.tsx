"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Approach() {
  return (
    <section className="w-full py-20">
        <h1 className="heading">
            My <span className="text-purple" >approach</span> to develop
        </h1>
        
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1" />}
        description="I believe that a well-thought-out plan is the foundation of any successful project. I work closely with clients to understand their goals, target audience, and unique challenges. This collaborative approach allows me to create a tailored strategy that aligns with their vision and ensures that every aspect of the project is carefully considered from the outset.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>


        <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase 2" />}
        description="I am passionate about crafting visually stunning and highly functional websites. I leverage the power of Next.js to create dynamic, responsive, and user-friendly web applications. My development process is iterative and collaborative, ensuring that the final product not only meets but exceeds client expectations. I pay meticulous attention to detail, from the overall design aesthetic to the smallest interactions, to create seamless user experiences that leave a lasting impression.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />


        </Card>
        <Card title="Testing & Deployment" icon={<AceternityIcon order="Phase 3" />}
        description="I am committed to delivering high-quality websites that perform flawlessly across all devices and browsers. I conduct rigorous testing throughout the development process to identify and resolve any issues, ensuring that the final product is robust, secure, and optimized for performance. Once the website is ready, I handle the deployment process with care, ensuring a smooth transition from development to production. I also provide ongoing support and maintenance to ensure that the website continues to perform at its best long after launch.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/20 group/canvas-card flex items-center justify-center dark:border-white/20  max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>

        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold ">
                {order}
            </span>
        </button>        
    </div>
  );
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;