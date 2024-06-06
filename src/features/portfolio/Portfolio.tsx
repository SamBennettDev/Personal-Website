import Navbar from "@/components/navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Education from "./components/Education";

import { useEffect, useRef } from "react";

function Portfolio({ scrollTo }: { scrollTo?: string }) {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if scrollTo is provided and matches a section
    if (scrollTo === "Projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "Experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "Education" && educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [scrollTo]);

  return (
    <>
      <Navbar />
      <Hero />
      <div ref={educationRef} className="scroll-mt-[50px]">
        <Education />
      </div>
      <div ref={projectsRef} className="scroll-mt-[50px]">
        <Projects />
      </div>
      <div ref={experienceRef} className="scroll-mt-[50px]">
        <Experience />
      </div>
    </>
  );
}

export default Portfolio;
