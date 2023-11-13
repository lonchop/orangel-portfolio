import React, { useState } from "react";
import langEnglish from "../lang/en-US.json";
import langSpanish from "../lang/es-ES.json";
import { IntlProvider } from "react-intl";

// La constante "LangContext" se utiliza para crear un contexto de idioma utilizando la función "createContext" de React.
const LangContext = React.createContext();

// La función "LangProvider" es un componente que proporciona el contexto de idioma a sus componentes secundarios.
const LangProvider = ({ children }) => {
  // La constante "localeDefault" se utiliza para almacenar el idioma seleccionado por el usuario y "langDefault" se utiliza para almacenar el objeto de idioma correspondiente.
  let localeDefault;
  let langDefault;

  // La constante "langStorage" obtiene el idioma almacenado en el almacenamiento local del navegador. Si el idioma está almacenado, se establece "localeDefault" y "langDefault" en consecuencia. Si no hay idioma almacenado, se establecen ambos valores en inglés por defecto.
  const langStorage = localStorage.getItem("lang");

  if (langStorage) {
    localeDefault = langStorage;

    if (langStorage === "en-US") {
      langDefault = langEnglish;
    } else if (langStorage === "en-ES") {
      langDefault = langSpanish;
    } else {
      localeDefault = langStorage;
      langDefault = langEnglish;
    }
  }

  // La variable de estado "language" se inicializa con el valor de "langDefault" y se puede actualizar utilizando el hook "useState" y la función "setLanguage".
  const [language, setLanguage] = useState(langDefault);

  // La variable de estado "locale" se inicializa con el valor de "localeDefault" y se puede actualizar utilizando el hook "useState" y la función "setLocale".
  const [locale, setLocale] = useState(localeDefault);

  // La función "changeLanguage" se utiliza para cambiar el idioma y actualizar el valor de "language" y "locale" en consecuencia. También almacena el idioma seleccionado en el almacenamiento local del navegador para recordar la selección del usuario en sesiones futuras.
  const changeLanguage = (lang) => {
    switch (lang) {
      case "english":
        setLanguage(langEnglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      case "español":
        setLanguage(langSpanish);
        setLocale("en-ES");
        localStorage.setItem("lang", "en-ES");
        break;
      default:
        setLanguage(langEnglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <LangContext.Provider value={{ changeLanguage: changeLanguage }}>
      <IntlProvider locale={locale} messages={language}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
