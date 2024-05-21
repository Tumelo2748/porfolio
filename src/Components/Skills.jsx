import React from "react";
import Python from "../Assets/Images/Skills/python.png";
import SQL from "../Assets/Images/Skills/SQL.png";
import Nodejs from "../Assets/Images/Skills/node.png";
import Html from "../Assets/Images/Skills/html.png";
import react from "../Assets/Images/Skills/react.png";
import Firebase from "../Assets/Images/Skills/firebase.png";
import PHP from "../Assets/Images/Skills/Php.png";
import Csharp from "../Assets/Images/Skills/C-sharp.png";

const Data = {
  skills: [
    {
      name: "HTML",
      image: Html,
    },
    {
      name: "Python",
      image: Python,
    },
    {
      name: "SQL",
      image: SQL,
    },
    {
      name: "Nodejs",
      image: Nodejs,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Firebase",
      image: Firebase,
    },
    {
      name: "PHP",
      image: PHP,
    },
    {
      name: "C#",
      image: Csharp,
    },
  ],
};

const Skills = () => {
  return (
    <section className="mt-36 mb-10" id="Skills">
      <div className="">
        <h2 className="text-4xl text-center text-white">My Skills</h2>
        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2 mt-10 px-5">
          {Data.skills.map((skill) => (
            <div className="bg-stone-900 rounded-md flex flex-col items-center justify-center p-4 transform transition duration-300 lg:hover:translate-y-4">
              <img
                className="object-contain px-24"
                src={skill.image}
                alt={skill.name}
              />
              <h4 className="text-white text-center mt-2">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
