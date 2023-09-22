import React from "react";
import AdminDashboardImg from "../Images/ecommerce.png";
const AdminDashboard = () => {
  return (
    <section className="hoverEffect flex flex-col sm:flex-row sm:justify-around lg:justify-start gap-4 mt-4 p-4 rounded text-sm">
      <img
        src={AdminDashboardImg}
        alt="edit product field of application"
        className="w-32 md:w-64 lg:w-1/4 h-48 rounded object-cover"
      />
      <div className="md:w-1/2">
        <a
          href="https://github.com/Marin303/ecommerce"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300"
        >
          Admin dashboard
          <span className="pl-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
        <p className="text-slate-400 pt-2">
          The Admin dashboard's foundation is NextJS, which I've used first
          time. Also did't only offers enhanced performance but also facilitates
          server-side rendering for a seamless user experience. With NextAuth, I
          ensure a secure and swift authentication process, which is paramount
          for any admin-centric application. For faster build, I've used
          Tailwind, which has been instrumental in crafting a sleek and
          adaptable UI. When it comes to storing assets, Amazon S3 is my choice
          for scalability. I've also incorporated the flexibility of Google
          Cloud, which takes a role in managing various cloud-based operations.
          All user data and dashboard metrics are stored in MongoDB, a database
          solution which ensures quick data delivery and scalability.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>NextJS</p>
          <p>NextAuth</p>
          <p>Tailwind</p>
          <p>Google Cloud</p>
          <p>Amazon S3</p>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
