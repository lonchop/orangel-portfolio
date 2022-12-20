import React, { useRef } from "react";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import { FormattedMessage } from "react-intl";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    const serviceID = "service_3gu69fh";
    const templateID = "template_flax1re";
    const publicKey = "AX3xLgavg3x-kGbkv";
    
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        alert("send Email success");
      },
      () => {
        alert("Error sending email");
      }
    );
    event.target.reset();
  };
  return (
    <>
      <section id="contact" className="contact-footer">
        <div className="contact">
          <div className="contact-container">
            <div className="label-container">
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-container">
                  <div>
                    <label for="user_name">
                      <FormattedMessage id="app.name" defaultMessage="Name" />
                    </label>
                    <input
                      type="text"
                      className="input"
                      id="user_name"
                      name="user_name"
                    />
                  </div>
                  <div>
                    <label for="user_email">
                      <FormattedMessage id="app.email" defaultMessage="Email" />
                    </label>
                    <input
                      type="email"
                      className="input"
                      id="user_email"
                      name="user_email"
                    />
                  </div>
                </div>
                <div className="input-container-2">
                  <div className="div">
                    <label for="message">
                      <FormattedMessage
                        id="app.message"
                        defaultMessage="Message"
                      />
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="text-area"
                    ></textarea>
                  </div>
                </div>
                <div className="btn-send-container">
                  <button className="btn-send" type="submit">
                    <img src={sendIcon} alt="cv-icon" />
                    <p>
                      <FormattedMessage
                        id="app.btn-send"
                        defaultMessage="Send now"
                      />
                    </p>
                  </button>
                </div>
              </form>
            </div>
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
            <FormattedMessage id="app.footer-text" defaultMessage="Made by " />
            <span>Orangel</span> — Copyright © 2022
          </p>
        </footer>
      </section>
    </>
  );
};
