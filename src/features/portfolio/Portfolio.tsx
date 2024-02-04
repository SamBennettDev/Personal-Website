import Navbar from "@/components/navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-66px)] bg-card"></div>
      <Projects />
      <Experience />
    </>
  );
}

export default Portfolio;
