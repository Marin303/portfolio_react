import React, { useState } from "react";

const Header = () => {
  const Line = ({ children }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={{ letterSpacing: "-2px" }} className="pr-2">
          {
          hovered ? 
          "-----------------------" 
          : 
          "------------------"
          }
        </span>
        {children}
      </div>
    );
  };
  return (
    <div className="p-20 h-screen w-1/2 flex flex-col lg:sticky top-0">
      <section>
        <h1 className="font-bold">Marin Muktić</h1>
        <h2>Frontend developer</h2>
        <h4 className="w-2/3 text-slate-400">
          I build user friendly, inclusive products and digital experiences for
          the web.
        </h4>
      </section>
      <section className="mt-14 gap-4 flex flex-col items-start text-slate-400 font-bold text-sm menu flex-grow">
        <button>
          <Line><a href="#about">ABOUT</a></Line>
        </button>
        <button>
          <Line><a href="#experience">EXPERIENCE</a></Line>
        </button>
        <button>
          <Line><a href="#projects">PROJECTS</a></Line>
        </button>
      </section>
      <section className="mt-8 flex gap-4 contactIcons text-slate-400">
        <a href="https://www.linkedin.com/in/marin-muktic/">
          <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/Marin303">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a href="mailto:marin.muktic3@gmail.com">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        </a>
      </section>
    </div>
  );
};

export default Header;
