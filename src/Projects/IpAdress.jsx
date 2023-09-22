import React from "react";
import IpAdressImg from "../Images/ipadress.png";
const IpAdress = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={IpAdressImg}
        alt="map on bottom and field for details"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover"
      />
      <div className="md:w-1/2">
        <a
          href="https://ip-address-tracker-marin.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Ip Adress Tracker Web Application
          <span className="pl-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
        <p className="text-slate-400 pt-2">
          Simply provide a valid IP address, and watch a translation into
          latitude and longitude coordinates, and then pinpoint on a map thanks
          to the power of JavaScript. I've employed Parcel for bundling code and
          securing sensitive keys. Connecting with Vanilla JavaScript woke up a
          sense of nostalgia, reminding me of the foundational joys of web
          development.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Parcel</p>
        </div>
      </div>
    </section>
  );
};

export default IpAdress;
