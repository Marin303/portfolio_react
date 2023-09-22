import React from "react";
import WineShopImg from "../Images/wine-shop.png";
const WineShop = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={WineShopImg}
        alt="three images of wine"
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
          Landing page to further test and showcase my CSS
          expertise. Frontend for a Wine shop, primed and ready for Backend
          integration to fully realize it as an e-commerce store.
          Utilizing tools and libraries like React-slideshow and Font Awesome
          for modern icons, along with the flexibility of Tailwind, the project
          came to life. Custom animations were particularly crafted
          with pure CSS, highlighting the depth of my familiarity.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>Tailwind</p>
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
};

export default WineShop;
