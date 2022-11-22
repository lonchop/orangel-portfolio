import React from "react";
import cvIcon from "../../assets/cv-icon.svg";
import { FormattedMessage } from "react-intl";
import "./About.scss";

export const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="btn-download-container">
          <a
            href="https://drive.google.com/file/d/1SnCZMm8RdF0l1gGkIPpTlf_46_vegw0c/view"
            target="_blank"
            className="link-cv"
          >
            <button className="btn-download">
              <img src={cvIcon} alt="cv-icon" />
              <p>
                <FormattedMessage id="app.btn-cv" />
              </p>
            </button>
          </a>
        </div>
        <div className="text-about-container">
          <p className="text-about">
            <FormattedMessage id="app.text-about" />
          </p>
        </div>
      </section>
    </>
  );
};
