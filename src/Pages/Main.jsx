import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";

const Main = () => {
  return (
    <div className="lg:w-1/2 relative scroll-smooth">
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Main;
