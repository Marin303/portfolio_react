import React from 'react'
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
            <p>Postman</p>
          </div>
        </div>
    </>
  )
}

export default LinkSharing