import Navbar from "@/components/navbar";
import Projects from "./components/Projects";

function Portfolio() {
  return (
    <>
      <Navbar />
      <h2 className="px-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Projects
      </h2>
      <Projects />
    </>
  );
}

export default Portfolio;
