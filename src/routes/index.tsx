import { Routes, Route } from "react-router-dom";
import Portfolio from "@/features/portfolio";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Projects" element={<Portfolio scrollTo="Projects" />} />
        <Route
          path="/Experience"
          element={<Portfolio scrollTo="Experience" />}
        />
        <Route path="/Education" element={<Portfolio scrollTo="Education" />} />
      </Routes>
    </>
  );
}
