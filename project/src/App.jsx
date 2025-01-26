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
           <Navbar/>
           <Hero/>
           <About/>
           <Service/>
           <Team/>
           <Work/>
           <Blog/>
           <Footer/>
       </div>
  )
}

export default App
