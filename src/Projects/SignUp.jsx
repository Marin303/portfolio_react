import React from "react";
import SignUpForm from "../Images/signup.png";
const SignUp = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={SignUpForm}
        alt="sign up form with password testing"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover lg:object-fit"
      />
      <div className="md:w-1/2">
        <a
          href="https://signup-vite.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Sign up form Web Application
          <span className="pl-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
        <p className="text-slate-400 pt-2">
          This application showcases field validation achieved through loops,
          ensuring data integrity. Setting up the project with Vite was swift
          and efficient, though I'd reserve comparisons with React for another
          day. My exploration into the .tsx extension has been insightful,
          especially evident when implementing it on a handler. It's evident
          that TypeScript offers big potential, and I'm ready to dive deeper
          into my future projects.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>Vite</p>
          <p>CSS</p>
          <p>TypeScript</p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
