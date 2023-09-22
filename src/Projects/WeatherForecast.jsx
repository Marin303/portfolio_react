import React from "react";
import WeatherForecastImg from "../Images/weather.png";
const WeatherForecast = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={WeatherForecastImg}
        alt="example of weather forecast"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
      />
      <div className="md:w-1/2">
        <a
          href="https://weather-app-marin.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Weather Forecast Web Application
        </a>
        <p className="text-slate-400 pt-2">
          Temperature, humidity, air pressure, wind deg, visibility, timezone,
          clouds, timezone, and weather image in one place. I've presented you
          with my Weather forecast Web application. Fetching data from API and
          presenting it with React, which enhanced my development journey for
          one more time. I've employed the CSS Grid to ensure a smooth and
          responsive presentation, enhancing the user experience.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;
