import React from "react";

const Projects = () => {
  return (
    <div className="text-sm">
      <section className="flex flex-wrap gap-4 mt-4 p-4 rounded">
        <p className="text-xs">IMAGE of Projects</p>
        <div className="w-1/2">
          <p>Country research</p>

          <p className="text-slate-400">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex gap-4 text-xs skills">
            <p>HTML</p>
            <p>Tailwind</p>
            <p>React</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;