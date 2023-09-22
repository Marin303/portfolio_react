import React, { useState } from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import chessIcon from "../Icons/chess.png";
import dartIcon from "../Icons/bullseye-arrow.png";
import football from "../Icons/football.png";

const Main = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseMove = (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="lg:w-1/2 relative" id="about">
      <div className="bg-black w-100 md:pl-20 p-5 h-14 lg:hidden flex items-center sticky top-0">
        ABOUT ME
      </div>
      <section className="text-left flex flex-col h-screen gap-4">
        <div className="md:p-20 p-5 text-slate-400">
          <p>
            My philosophy regarding education and learning is closely related to
            several theories of motivation. By keeping things positive, I
            believe in ending with learning more and getting more out of every
            lesson.
          </p>
          <p>
            My portfolio is a representation of all that I've learned and
            accomplished after an official Frontend course, intensive Udemy
            sessions, insightful lessons from FreeCodeCamp and challenging
            Frontend Mentor projects.
          </p>
          <p>
            When I'm not on my triple-screen monitor, I hone my strategy with
            <span
              className="pl-1 sm:font-bold sm:cursor-none sm:text-slate-300"
              onMouseEnter={() => handleIconHover(chessIcon)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              chess
            </span>,
            perfect my aim with
            <span
              className="pl-1 sm:font-bold sm:cursor-none sm:text-slate-300"
              onMouseEnter={() => handleIconHover(dartIcon)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              darts
            </span>, and celebrate weekends with the thrill of
            <span
              className="pl-1 sm:font-bold sm:cursor-none sm:text-slate-300"
              onMouseEnter={() => handleIconHover(football)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              football
            </span>.
            {hoveredIcon && (
              <img
                src={hoveredIcon}
                alt="hovered icon"
                className="sm:fixed sm:block hidden"
                style={{
                  top: cursorPos.y + 25 + "px",
                  left: cursorPos.x - 10 + "px",
                }}
              />
            )}
          </p>
        </div>
        <Experience />
        <Projects />
      </section>
    </div>
  );
};

export default Main;
