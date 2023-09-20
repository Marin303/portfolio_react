import React, { useState } from "react";

const Header = () => {
  const Line = ({ children }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center"
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
    <div className="p-10 bg-black h-screen w-1/3">
      <section>
        <h1 className="font-bold">Marin Muktić</h1>
        <h2>Frontend developer</h2>
        <h4>
          I build user friendly, inclusive products and digital experiences for
          the web.
        </h4>
      </section>
      <section className="mt-8 flex flex-col items-start text-slate-400 font-bold text-sm menu">
        <button>
          <Line><a href="#about">ABOUT</a></Line>
        </button>
        <button>
          <Line><a href="#expirience">EXPIRIENCE</a></Line>
        </button>
        <button>
          <Line><a href="#projects">PROJECTS</a></Line>
        </button>
      </section>
      <section className="mt-8 flex gap-2 contactIcons">
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
