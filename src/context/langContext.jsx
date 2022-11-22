import React, { useState } from "react";
import langEnglish from "../lang/en-US.json";
import langSpanish from "../lang/es-ES.json";
import { IntlProvider } from "react-intl";

const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  let localeDefault;
  let langDefault;

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

  const [language, setLanguage] = useState(langDefault);
  const [locale, setLocale] = useState(localeDefault);

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
    console.log("Change language", lang);
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
