import React from 'react'

const About = () => {
  return (
    <div>
        <div class="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 class="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-6xl animate-slidein">
                Hi<span class="hover:animate-[bounce]">👋</span>my name is
                Tumelo Thinane,
                <span class="text-orange-300">Full Stack Developer</span>
              </h1>
              <p class="mt-8 text-lg font-normal text-gray-400 sm:mt-8 animate-slidein">
                I am a passionate developer on a mission to turn lines of code
                into impactful solutions. With a keen eye for detail and a love
                for problem-solving, I specialize in crafting clean, efficient,
                and user-friendly applications. From frontend to backend, I
                thrive on the challenges of the digital landscape. Let's build
                something amazing together!
              </p>
            </div>

            <div class="relative">
              <div class="absolute inset-0">
                <svg
                  class="blur-3xl filter opacity-80"
                  // style={{filter: blur(64)}}
                  width="444"
                  height="536"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                  <defs>
                    <linearGradient
                      id="c"
                      x1="82.7339"
                      y1="550.792"
                      x2="-39.945"
                      y2="118.965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        // style="stop-color: var(--color-cyan-500)"
                      />
                      <stop
                        offset="100%"
                        // style="stop-color: var(--color-purple-900)"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <img
                class="relative w-full max-w-md mx-auto hover:animate-[pulse_5s_ease-out_infinite]"
                src="https://img.buzzfeed.com/buzzfeed-static/complex/images/ic7defqune831dh9orwm/memoji-2.png?downsize=900:*&output-format=auto&output-quality=auto"
                alt=""
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About