import { Routes, Route } from "react-router-dom";
import Portfolio from "@/features/portfolio";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio ScrollTo="" />} />
        <Route path="/projects" element={<Portfolio ScrollTo="Projects" />} />
        <Route
          path="/experience"
          element={<Portfolio ScrollTo="Experience" />}
        />
      </Routes>
    </>
  );
}
