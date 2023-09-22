import React from "react";
import LinkSharingImg from "../Images/link-sharing.webp";
const LinkSharing = () => {
  return (
    <>
      <img
        src={LinkSharingImg}
        alt="forms on the end of application"
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
          This web application is a seamless integration of modern Frontend and
          Backend technologies. At the heart of Web application is React, which
          provides a dynamic user interface. For efficient routing and
          displaying of various pages, React Router has been employed. To ensure
          fluid state management across pages, I have used React Redux. For
          persistent data storage within the user's current session, local
          storage steps in. TailwindCSS accelerates the styling
          process, allowing for a responsive and sleek design. On the server
          side, the application is powered by a robust combination of NodeJS and
          ExpressJS. Image uploads, even for testing, are handled securely using
          Multer which temporarily saves images locally. For long-term and
          scalable cloud storage, I chose Amazon S3, ensuring both safety and
          accessibility. To maintain and manage user data, MongoDB offers a
          flexible and efficient database solution.
        </p>
        <div className="text-emerald-300 flex flex-wrap gap-2 text-xs skills mt-2">
          <p>React</p>
          <p>Router</p>
          <p>Redux</p>
          <p>Tailwind</p>
          <p>NodeJS</p>
          <p>Amazon S3</p>
          <p>MongoDB</p>
          <p>Express JS</p>
          <p>Render</p>
          <p>Postman</p>
        </div>
      </div>
    </>
  );
};

export default LinkSharing;
