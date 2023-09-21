import React from "react";
import LinkSharing from "../Images/link-sharing.webp";
import AdminDashboard from "../Images/ecommerce.png";
import CountrySearch from "../Images/country.png";
import WeatherForecast from "../Images/weather.png";
import PasswordGen from "../Images/password-generator.png";
import IpAdress from "../Images/ipadress.png";
import ChatApp from "../Images/chatapp.png";
import WineShop from "../Images/wine-shop.png"
import SignUpForm from "../Images/signup.png"
const Projects = () => {
  return (
    <div id="projects" className="hoverContainer lg:mt-20">
      <div className="bg-black w-100 md:pl-20 p-5 h-14 lg:hidden flex items-center sticky top-0">
        PROJECTS
      </div>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={LinkSharing}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover lg:object-fit"
        />
        <div className="md:w-1/2">
          <a
            href="https://link-sharing-app-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Link Sharing Web Application
          </a>

          <p className="text-slate-400 pt-2">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>Tailwind</p>
            <p>NodeJS</p>
            <p>Amazon S3</p>
            <p>MongoDB</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={AdminDashboard}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover"
        />
        <div className="md:w-1/2">
          <a
            href="https://github.com/Marin303/ecommerce"
            target="_blank"
            rel="noreferrer"
          >
            Admin dashboard
          </a>
          <p className="text-slate-400 pt-2">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>Tailwind</p>
            <p>NodeJS</p>
            <p>Amazon S3</p>
            <p>MongoDB</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={CountrySearch}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
        />
        <div className="md:w-1/2">
          <a
            href="https://rest-countries-marin.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Country Search Web Application
          </a>
          <p className="text-slate-400 pt-2">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>CSS</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={WeatherForecast}
          alt=""
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
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>CSS</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={IpAdress}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover"
        />
        <div className="md:w-1/2">
          <a
            href="https://ip-address-tracker-marin.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ip Adress Tracker Web Application
          </a>
          <p className="text-slate-400 pt-2">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Parcel</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={PasswordGen}
          alt=""
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
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>CSS</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={ChatApp}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
        />
        <div className="md:w-1/2">
          <a
            href="https://chat-app-marin.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Web Chat Application
          </a>
          <p className="text-slate-400">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>CSS</p>
            <p>Scaledrone</p>
          </div>
        </div>
      </section>
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={WineShop}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
        />
        <div className="md:w-1/2">
          <a
            href="https://wine-shop-marin.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Wine shop template
          </a>
          <p className="text-slate-400">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>React</p>
            <p>CSS</p>
          </div>
        </div>
      </section>
      
      <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
        <img
          src={SignUpForm}
          alt=""
          className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-fit"
        />
        <div className="md:w-1/2">
          <a
            href="https://signup-vite.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sign up form Web Application
          </a>
          <p className="text-slate-400">
            Learning basic of JavaScript algorithm, validation, loops Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
            architecto rerum enim magni fugiat dolore, corrupti perspiciatis
            fuga voluptatum rem, eos quos, voluptatem qui molestias at quidem
            illo odit!
          </p>
          <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
            <p>Vite</p>
            <p>CSS</p>
            <p>TypeScript</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
