import React from "react";

const Experience = () => {
  return (
    <div className="hoverContainer relative" id="experience">
      <div className="bg-black w-full md:pl-20 p-5 h-14 lg:hidden flex items-center sticky top-0">
        EXPERIENCE
      </div>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <p className="text-xs">DEC-APR 2022/3</p>
        <div className="md:w-1/2">
          <p>Frontend Development - Algebra Education</p>
          <p>Advanced JavaScript and React Foundations</p>
          <p className="text-slate-400 pt-1">
            I acquired a foundational understanding of HTML, emphasizing the
            structure and content of web pages. My learning curve also
            encompassed advanced CSS techniques, leveraging SASS for better
            design optimization. As I ventured deeper, I honed my skills in
            JavaScript, focusing on both its fundamental aspects and advanced
            topics such as asynchronous programming and OOP. Further enrichment
            came from React, where I familiarized myself with hooks, props, and
            state management using Redux. My hands-on experience includes
            developing a chat application powered by the Scaledrone service.
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>Git</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Docker</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <p className="text-xs">DEC-JUN 2022/3</p>
        <div className="md:w-1/2">
          <p>
            FreeCodeCamp - JavaScript Algorithms and Data Structures
            Certification
          </p>
          <p className="text-slate-400 pt-1">
            During this certification, I dove deep into the core concepts of
            JavaScript. Starting with foundational topics such as variables,
            arrays, and loops, I later ventured into advanced algorithms and
            data structure manipulations. This journey also exposed me to
            distinct programming paradigms, namely Object Oriented Programming
            (OOP) and Functional Programming (FP).
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <p className="text-xs lg:pr-2">AUG-OCT 2022</p>
        <div className="md:w-1/2">
          <p>
            <a
              href="https://www.freecodecamp.org/certification/Marin03/responsive-web-design"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              FreeCodeCamp - Responsive Web Design Certification
              <span className="pl-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
            </a>
          </p>
          <p className="text-slate-400 pt-1">
            This certification enriched my design perspective, offering an
            in-depth understanding of HTML and CSS. The course modules walked me
            through creating dynamic layouts and responsive designs. I gained
            hands-on experience by building various projects, including a cat
            photo app and a magazine layout using modern techniques like CSS
            Flexbox and Grid.
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
