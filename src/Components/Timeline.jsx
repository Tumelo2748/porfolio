import React from 'react'

const Timeline = () => {
  return (
    <div>
        {/* Career Timeline section */}
        <section class="text-white p-24 mt-36">
          <h2 class="text-6xl text-center text-white mb-16 mt-5">
            Career Timeline
          </h2>
          <div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li class="transition-all duration-300 hover:scale-105">
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                  <time class="font-mono italic">2024</time>
                  <div class="text-lg font-black">
                    Full Stack Developer (Project-Y)
                  </div>
                  <span class="text-gray-300">
                    Started my first learnership/internship at Project-Y to
                    Upskill my skill as a full Stack developer
                  </span>
                </div>
                <hr />
              </li>

              <li class="transition-all duration-300 hover:scale-105">
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic">2023</time>
                  <div class="text-lg font-black">
                    Full Stack Developer - (Euphorea)
                  </div>
                  <span class="text-gray-300">
                    Worked with Euphorea to Design and Develop an Entertainment
                    portfolio website using React for Frontend, Nodejs and
                    Firebase for Backend.
                  </span>
                </div>
                <hr />
              </li>

              <li class="transition-all duration-300 hover:scale-105">
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                  <time class="font-mono italic">2023</time>
                  <div class="text-lg font-black">
                    Graduated University (University of Johannesburg)
                  </div>
                  <span class="text-gray-300">
                    I Completed my Qualification in Business information
                    Technology from the University of Johannesburg.
                  </span>
                </div>
                <hr />
              </li>
              <li class="transition-all duration-300 hover:scale-105">
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic">2020</time>
                  <div class="text-lg font-black">Starting of University</div>
                  <span class="text-gray-300">
                    The Beginning of my software development career
                  </span>
                </div>
                <hr />
              </li>
              <li class="transition-all duration-300 hover:scale-105">
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                  <time class="font-mono italic">2019</time>
                  <div class="text-lg font-black">Finished High School</div>
                  <span class="text-gray-300">
                    I finished high school in 2019.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default Timeline