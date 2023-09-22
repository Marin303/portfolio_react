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
          className="hover:text-emerald-300"
        >
          Password Generator Web Application
          <span className="pl-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
        <p className="text-slate-400 pt-2">
          In my quest to explore new React features and great npm packages, I've
          found out `react-toastify`. While I wasn't sure of the ideal context
          to test it, this application seemed like a fitting playground and it
          integrated flawlessly. The linear gradient coupled with the box shadow
          truly shines in this compact web application, enhancing it's visual
          appeal.
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
