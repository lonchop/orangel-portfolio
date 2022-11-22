import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "./components/1-navbar/Navbar";
import { Hero } from "./components/2-hero/Hero";
import { About } from "./components/3-about/About";
import { Projects } from "./components/4-projects/Projects";
import { Contact } from "./components/5-contact/Contact";
import { LangContext } from "./context/langContext";
import "./App.scss";

function App() {
  const leng = useContext(LangContext);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="App">
      <Navbar scrolling={scrollY} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
