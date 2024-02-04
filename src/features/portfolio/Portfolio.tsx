import Navbar from "@/components/navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { animateScroll, scroller } from "react-scroll";
import Hero from "./components/Hero";

function Portfolio({ ScrollTo }: { ScrollTo: string }) {
  if (ScrollTo) {
    scroller.scrollTo(ScrollTo, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -60,
    });
  } else {
    animateScroll.scrollToTop({ duration: 500, delay: 100, smooth: true });
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
    </>
  );
}

export default Portfolio;
