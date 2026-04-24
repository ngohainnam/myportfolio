import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaChrome, FaHourglass } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full min-h-screen sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            { name: "Home", link: "/", icon: <FaHourglass /> },
            { name: "About", link: "#about", icon: <FaChrome /> },
          ]}/>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
