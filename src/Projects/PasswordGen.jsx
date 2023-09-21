import React from "react";
import PasswordGenImg from "../Images/password-generator.png";
const PasswordGen = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={PasswordGenImg}
        alt="green background with application on middle"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
      />
      <div className="md:w-1/2">
        <a
          href="https://password-generator-marin.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Password Generator Web Application
        </a>
        <p className="text-slate-400 pt-2">
          Learning basic of JavaScript algorithm, validation, loops Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptates ut architecto
          rerum enim magni fugiat dolore, corrupti perspiciatis fuga voluptatum
          rem, eos quos, voluptatem qui molestias at quidem illo odit!
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
};

export default PasswordGen;
