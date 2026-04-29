import Image from "next/image";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-8 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>


      <div
        className="h-screen w-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       fixed top-0 left-0 flex items-center justify-center -z-10"
      >

        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-blue-500 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-white text-black flex items-center justify-center gap-3">
            <Image
              src="/hai_nam_ngo.jpg"
              alt="Kent"
              width={400}
              height={400}
              className="rounded-full object-cover w-40 h-40 md:w-36 md:h-36 ring-2 ring-blue-500/40"
            />
            Hi! I&apos;m Kent, a <span className="font-bold text-blue">Next.js Developer | Data Analyst | AI Enthusiast</span> based in Melbourne.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;