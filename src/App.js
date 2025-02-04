import React from "react";
import BlurBackGround from "./components/blurBackground/index";
import NavBar from "./components/navBar/index";
import Hero from "./components/hero/index";
import Project from "./components/project/index";
import About from "./components/about/index";
import Experiences from "./components/experience/index";
import Testimonials from "./components/testimonial/index";
import Contact from "./components/contact/index";

function App() {
  return (
    <div>
      <BlurBackGround />
      <NavBar />
      <main className="overflow-hidden max-w-7xl mx-auto relative z-10 antialiased">
        <NavBar />
        <Hero />
        <Project />
        <About />
        <Experiences />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
// Variants

export default App;
