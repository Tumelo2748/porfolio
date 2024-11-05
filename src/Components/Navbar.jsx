import React from "react";
// import { useState } from "react";

const Navs = {
  Navdata: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Contact",
      url: ".contact",
    },
    {
      title: "Work",
      url: ".Work",
    },
  ],
};

const Navbar = () => {
  // const [active, setActive] = useState("Home");
  
  return (
    <div>
      <header class="py-4 bg-stone-950 sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="shrink-0  p-1">
              <a href="/" alt="I" class="flex">
                <h1 class="text-3xl text-black text-center animate-text2 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Tumelo
                </h1>
              </a>
            </div>

            <div class="flex md:hidden">
              <button type="button" class="text-white">
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav class="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              
              {Navs.Navdata.map((item) => {
                return (
                  
                  <a
                    href={item.url}
                    title={item.title}
                    class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                  >
                    {item.title}
                  </a>
                );
              })}
              {/* <a
                href="#about"
                title=""
                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                About
              </a>

              <a
                href="#Work"
                title=""
                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Work
              </a>

              <a
                href="#Contact"
                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Contact
              </a> */}
            </nav>

            <div class="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="https://www.linkedin.com/in/selepe-thinane"
                class="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Hire me
              </a>
            </div>
            <div class="form-control w-40 ml-12">
              <label class="cursor-pointer label">
                <span class="label-text text-white">light Mode</span>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
