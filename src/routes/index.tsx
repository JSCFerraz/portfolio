import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { About } from "../pages/about";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
