import React from "react";
import PortfolioV1Img from "../Images/portfolio-v1.png";

const PortfolioV1 = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={PortfolioV1Img}
        alt="test of application with white background"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
      />
      <div className="md:w-1/2">
        <a
          href="https://marin-portfolio-website.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Portfolio Website version 1.
          <span className="pl-2">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </a>
        <p className="text-slate-400 pt-2">
          The initial iteration indeed felt like a first version, leaving space
          for improvements which I addressed in the second version. Even so, for
          a junior developer, the first version served a valuable learning
          experience. Floating circles are driven by mathematical logic,
          letter-by-letter spelling using loops, traditional contact
          information, and a toggle-based navigation menu. The ability to
          dynamically switch content based on user interactions, combined with a
          unique glitch effect, gives touch to the project.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>Tailwind</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioV1;
