import React from "react";
import LinkSharing from "../Projects/LinkSharing";
import AdminDashboard from "../Projects/AdminDashboard";
import CountrySearch from "../Projects/CountrySearch";
import WeatherForecast from "../Projects/WeatherForecast";
import IpAdress from "../Projects/IpAdress";
import PasswordGen from "../Projects/PasswordGen";
import ChatApp from "../Projects/ChatApp";
import WineShop from "../Projects/WineShop";
import SignUp from "../Projects/SignUp";

import Footer from "./Footer";
const Projects = () => {
  return (
    <div className="hoverContainer lg:mt-20">
      <div className="bg-black w-100 md:pl-20 p-5 h-14 lg:hidden flex items-center sticky top-0">
        PROJECTS
      </div>
      <section
        id="projects"
        className="
        hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm"
      >
        <LinkSharing />
      </section>
      <AdminDashboard />
      <CountrySearch />
      <WeatherForecast />
      <IpAdress />
      <PasswordGen />
      <ChatApp />
      <WineShop />
      <SignUp />

      <Footer />
    </div>
  );
};

export default Projects;
