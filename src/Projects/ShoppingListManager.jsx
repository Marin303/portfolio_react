import React from "react";
import ShoppingListManagerImg from "../Images/shopping-list-manager.png";
const ShoppingListManager = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={ShoppingListManagerImg}
        alt="edit product field of application"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover"
      />
      <div className="md:w-1/2">
        <a
          href="https://github.com/Marin303/shopping_list_manager"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Shopping list manager
          <span className="pl-2">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </a>
        <p className="text-slate-400 pt-2">
          Shopping experience with the Shopping List Manager. This application
          executes CRUD operations, fetching real-time JSON data from the
          backend for a dynamic frontend display. Gain valuable insights through
          an analytics tool that visually represents spending on specific months
          and categories. Effortlessly create and manage shopping lists,
          tracking details for each item. The custom-made SCSS ensures a fully
          responsive design. Leveraged the power of React Router and local
          storage for core functionalities. Docker accessibility ensures without
          interruption deployment.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>NodeJS</p>
          <p>SCSS</p>
          <p>JSON</p>
          <p>Router</p>
          <p>Docker</p>
        </div>
      </div>
    </section>
  );
};

export default ShoppingListManager;
