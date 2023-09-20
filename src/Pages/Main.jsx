import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="w-1/2">
      <section className="text-left flex flex-col h-screen gap-4 p-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          commodi quidem assumenda dolor. Possimus maxime, laudantium ullam
          recusandae quasi consequuntur ipsum quos eligendi ducimus excepturi
          mollitia est, cupiditate enim repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eius, nihil modi nisi tenetur facere aliquam, similique obcaecati
          saepe ducimus cumque sint consequatur facilis animi veritatis
          voluptate maxime deserunt impedit.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sed
          explicabo voluptas sapiente error corrupti fugiat sint distinctio
          blanditiis cupiditate modi voluptatum earum, perspiciatis eum
          voluptate delectus, libero recusandae fuga?
        </p>
        <Experience />
        <Projects/>
      </section>
    </div>
  );
};

export default Main;
