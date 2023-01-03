import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import portfolioLogo from "../../assets/portfolio-logo.svg";
import languageIcon from "../../assets/language-icon.svg";
import hamIcon from "../../assets/ham-icon.svg";
import upIcon from "../../assets/up-icon.svg";
import { FormattedMessage } from "react-intl";
import { LangContext } from "../../context/langContext";
import "./Navbar.scss";

export const Navbar = ({ scrolling }) => {
  // La constante "lang" utiliza el hook "useContext" para obtener el valor del contexto de idioma (LangContext).
  const lang = useContext(LangContext);

  // La variable de estado "activeHam" se inicializa en "false" y se puede actualizar utilizando el hook "useState" y la función "setActiveHam".
  const [activeHam, setActiveHam] = useState(false);
  // La variable de estado "changeLang" se inicializa en "false" y se puede actualizar utilizando el hook "useState" y la función "setChangeLang".
  const [changeLang, setChangeLang] = useState(false);

  // La función "clickChangeLang" se utiliza para cambiar el valor de "changeLang" y para cambiar el idioma utilizando la función "changeLanguage" del contexto de idioma.
  const clickChangeLang = () => {
    setChangeLang(!changeLang);
    let langSelect = changeLang ? "english" : "español";
    lang.changeLanguage(langSelect);
  };

  // La función "clickActiveHam" se utiliza para cambiar el valor de "activeHam".
  const clickActiveHam = () => {
    setActiveHam(!activeHam);
  };

  // La función "clickDisabledHam" se utiliza para desactivar "activeHam" estableciendo su valor en "false". Esto es utilizado por los link que van a cada area del portfolio.
  const clickDisabledHam = () => {
    setActiveHam(false);
  };

  return (
    <>
      <nav className={`${activeHam ? "navbar-cero" : null} navbar`}>
        <div className="navbar-container">
          <img
            src={portfolioLogo}
            alt="portfolio-logo"
            className="portfolio-logo"
          />
          <ul className="links">
            <li>
              <Link to="hero" smooth duration={800}>
                <FormattedMessage id="app.home" defaultMessage="Home" />
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={800}>
                <FormattedMessage id="app.about" defaultMessage="About" />
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={800}>
                <FormattedMessage id="app.projects" defaultMessage="Projects" />
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={800}>
                <FormattedMessage id="app.contact" defaultMessage="Contact" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-change-container">
          <button onClick={clickChangeLang} className="btn-change">
            <img
              src={languageIcon}
              alt="language-icon"
              className="language-icon"
            />
            <p className="text-short">
              <FormattedMessage id="app.btn-short" defaultMessage="ES" />
            </p>
            <p className="text-long">
              <FormattedMessage id="app.btn-long" defaultMessage="Spanish" />
            </p>
          </button>
        </div>
        <button onClick={clickActiveHam} className="btn-ham">
          <img src={hamIcon} alt="ham" className="ham" />
        </button>
      </nav>

      <nav className={`${activeHam ? "navbar-ham" : "navbar-ham-none"} navbar`}>
        <ul className={`${activeHam ? "links-ham" : "links-ham-none"}`}>
          <li>
            <Link to="hero" smooth duration={800}>
              <button className="btn-link-ham" onClick={clickDisabledHam}>
                <FormattedMessage id="app.home" defaultMessage="Home" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={800}>
              <button className="btn-link-ham" onClick={clickDisabledHam}>
                <FormattedMessage id="app.about" defaultMessage="About" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={800}>
              <button className="btn-link-ham" onClick={clickDisabledHam}>
                <FormattedMessage id="app.projects" defaultMessage="Projects" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={800}>
              <button className="btn-link-ham" onClick={clickDisabledHam}>
                <FormattedMessage id="app.contact" defaultMessage="Contact" />
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <button className={`${scrolling > 400 ? "btn-up" : "none-btn-up"}`}>
        <Link to="hero" smooth duration={800}>
          <img src={upIcon} alt="up-icon" className="up-icon" />
        </Link>
      </button>
    </>
  );
};
