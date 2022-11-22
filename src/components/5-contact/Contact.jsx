import React from "react";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import { FormattedMessage } from "react-intl";
import "./Contact.scss";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-footer">
        <div className="contact">
          <div className="contact-container">
            <div className="label-container">
              <form action="">
                <div className="input-container">
                  <div>
                    <label>
                      <FormattedMessage id="app.name" defaultMessage="Name"/>
                    </label>
                    <input type="text" className="input" />
                  </div>
                  <div>
                    <label>
                      <FormattedMessage id="app.email" defaultMessage="Email"/>
                    </label>
                    <input type="text" className="input" />
                  </div>
                </div>
                <div className="input-container-2">
                  <div className="div">
                    <label>
                      <FormattedMessage id="app.message" defaultMessage="Message" />
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="text-area"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <button className="btn-send">
              <img src={sendIcon} alt="cv-icon" />
              <p>
                <FormattedMessage id="app.btn-send" defaultMessage="Send now" />
              </p>
            </button>
          </div>
        </div>

        <footer className="footer">
          <div className="social-media">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/orangel-gonzalez"
            >
              <img src={linkedinIcon} alt="linkedin-icon" />
            </a>
            <a target="_blank" href="https://github.com/lonchop">
              <img src={githubIcon} alt="github-icon" />
            </a>
          </div>
          <p>
            <FormattedMessage id="app.footer-text" defaultMessage="Made by "/>
            <span>Orangel</span> — Copyright © 2022
          </p>
        </footer>
      </section>
    </>
  );
};
