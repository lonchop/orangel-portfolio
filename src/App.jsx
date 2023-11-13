import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "./components/1-navbar/Navbar";
import { Hero } from "./components/2-hero/Hero";
import { About } from "./components/3-about/About";
import { Projects } from "./components/4-projects/Projects";
import { Contact } from "./components/5-contact/Contact";
import { LangContext } from "./context/langContext";
import "./App.scss";

function App() {
  //La constante "lang" utiliza el hook "useContext" de React para obtener el valor del contexto de idioma.
  const lang = useContext(LangContext);

  // La variable de estado "scrollY" se inicializa en "0" y se puede actualizar utilizando el hook "useState" y la función "setScrollY".
  const [scrollY, setScrollY] = useState(0);

  // La función "handleScroll" se ejecuta cada vez que el usuario hace scroll en la página y actualiza el valor de "scrollY" con la posición actual del scroll.
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  // El hook "useEffect" se utiliza para escuchar el evento "scroll" de la ventana del navegador y ejecutar la función "handleScroll" en consecuencia. El segundo argumento del hook "useEffect" es un arreglo vacío, lo que significa que la función "handleScroll" solo se ejecutará una vez cuando se monte el componente.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div>
      <Navbar scrolling={scrollY} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
