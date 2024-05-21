import React from "react";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import Timeline from "../Components/Timeline";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div class="bg-black h-screen">
      <Navbar />

      <section
        class="relative py-12 overflow-hidden bg-stone-950 sm:pb-16 lg:pb-20 xl:pb-24"
        id="about"
      >
        <About />

        <Projects />

        <Timeline />

        <Skills />

        <Footer />
      </section>
    </div>
  );
};

export default Home;
