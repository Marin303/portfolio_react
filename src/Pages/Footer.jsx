import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-end mr-5 mt-5 mb-5 text-right">
      <p className="pr-2 text-slate-400">&#169;2023 | Developed by</p>
      <a href="https://github.com/Marin303" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-emerald-300">
        Marin Muktić
      </a>
    </div>
  );
};

export default Footer;
