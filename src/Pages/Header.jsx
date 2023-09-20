import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [activeLine, setActiveLine] = useState(null);


  const Line = ({ children, isActive }) => {
    const divRef = useRef(null);

    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setActiveLine(null);
      }
    };

    useEffect(() => {
      if (isActive) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isActive]);

    
  /*   const handleToggle = () => {
      setActiveLine((prev) => !prev);
    }; */

    return (
      <div
        ref={divRef}
        
        className={`${isActive ? "text-white" : ""}`}
      >
        <span style={{ letterSpacing: "-2px" }} className="pr-2">
          {isActive ? "-----------------------" : "------------------"}
        </span>
        {children}
      </div>
    );
  };

  return (
    <div className="md:p-20 p-5 flex flex-col lg:h-screen lg:w-1/2 lg:sticky lg:top-0">
      <section>
        <h1 className="font-bold">Marin Muktić</h1>
        <h2>Frontend developer</h2>
        <h4 className="w-2/3 text-slate-400 pt-2">
          I build user friendly, inclusive products and digital experiences for
          the web.
        </h4>
      </section>
      <section className="mt-14 gap-4 hidden lg:flex flex-col items-start text-slate-400 font-bold text-sm menu flex-grow">
        <button onClick={() => setActiveLine("about")}>
          <Line isActive={activeLine === "about"}>
            <a href="#about">ABOUT</a>
          </Line>
        </button>
        <button onClick={() => setActiveLine("experience")}>
          <Line isActive={activeLine === "experience"}>
            <a href="#experience">EXPERIENCE</a>
          </Line>
        </button>
        <button onClick={() => setActiveLine("projects")}>
          <Line isActive={activeLine === "projects"}>
            <a href="#projects">PROJECTS</a>
          </Line>
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
