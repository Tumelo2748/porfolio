import React from "react";
import Euphorea from "../Assets/Images/Projects/Euphorea.png";
import Bakery from "../Assets/Images/Projects/BakerySite.png";
import Rental from "../Assets/Images/Projects/Rental.png";

const Projects_Data = {
  projects: [
    {
      title: "Euphorea",
      image: Euphorea,
      description:
        "Euphorea is a website for a local restaurant. It is built with React and TailwindCSS",
      link: "https://github.com/Tumelo2748/Euphorea",
    },
    {
      title: "Bakery Website",
      image: Bakery,
      description: "Bakery website built with React and TailwindCSS",
      link: "https://github.com/Tumelo2748/km-bakery-and-catering",
      live: "https://km-bakery-and-catering.netlify.app/",
    },

    {
      title: "Rental Website",
      image: Rental,
      description: "Rental website built with React and TailwindCSS",
      link: "https://github.com/Tumelo2748/Rental-Website",
      live: "https://tumelo2748.github.io/Rental-Website/",
    },

    
    
  ],
};

const Projects = () => {
  return (
    <div>
      {/* Projects section */}

      <div class="">
        <div class="m-4 mt-24 lg:mx-40" id="Work">
          <h2 class="text-6xl text-center text-white mb-16 mt-5">Projects</h2>

          {Projects_Data.projects.map((project) => (
            <div class="flex flex-col w-full lg:flex-row gap-16 mb-10">
              <img
                class="object-cover h-72 w-96 transition-all duration-300 hover:scale-105 rounded-md drop-shadow-[0_10px_3px_#BA5C12]"
                src={project.image}
                alt="Bakery"
              />

              <div class="flex-grow h-32 place-items-center text-white">
                <h1 class="text-2xl font-bold Hover:animate-text">
                  {project.title}
                </h1>
                <h6 class="font-normal text-gray-400 mt-4">
                  {project.description}
                </h6>

                {/* <h3 class="mt-8">
                  A Website where all your tastes are met wih joy
                </h3> */}
                <div class="mt-8">
                  <a
                    class="text-orange-400 font-bold"
                    href={project.live}
                  >
                    {" "}
                    Explore{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}


          <div class="mt-16">
            <a
              class="bg-orange-500 text-center text-gray-300 rounded-lg p-5 font-bold"
              href="https://github.com/Tumelo2748?tab=repositories"
            >
              View all Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
