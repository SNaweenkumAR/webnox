import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Service from "./Component/Service";
import Team from "./Component/Team";
import Work from "./Component/Work";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Service id="service" />
      <Team id="team" />
      <Work id="work" />
      <Blog id="blog" />
      <Footer />
    </div>
  );
}

export default App;
