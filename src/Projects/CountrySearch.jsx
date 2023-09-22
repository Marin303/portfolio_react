import React from "react";
import CountrySearchImg from "../Images/country.png";
const CountrySearch = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={CountrySearchImg}
        alt="4 countries on screen"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
      />
      <div className="md:w-1/2">
        <a
          href="https://rest-countries-marin.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Country Search Web Application
          <span className="pl-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
        <p className="text-slate-400 pt-2">
          This project marked my initial step into connecting with APIs.
          Through this experience, I've crafted a Web application that fast
          delivers detailed information on countries, including their
          population, region, capital, and national flag. Additionally, features
          as 'Filter by Region' and a light mode toggle not only enhance user
          experience but have also shown the way for creative ideas in my future
          projects.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
};

export default CountrySearch;
