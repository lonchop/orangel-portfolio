import React, { useRef, useState } from "react";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import { FormattedMessage} from "react-intl";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Contact.scss";

export const Contact = () => {
  const [userName, setUserName] = useState({ campo: "", valido: null });
  const [userEmail, setUserEmail] = useState({ campo: "", valido: null });
  const [validateForm, setValidateForm] = useState(null);
  const form = useRef();

  const expresions = {
    user_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    user_email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const onChangeName = (e1) => {
    setUserName({ ...userName, campo: e1.target.value });
  };

  const onChangeEmail = (e2) => {
    setUserEmail({ ...userEmail, campo: e2.target.value });
  };

  let errorNameMessage;
  let errorEmailMessage;

  if (expresions.user_name && expresions.user_email) {
    if (!expresions.user_name.test(userName.campo)) {
      errorNameMessage = "El nombre solo puede contener letras";
    }

    if (!expresions.user_email.test(userEmail.campo)) {
      errorEmailMessage = "Ingrese un email valido.";
    }
  }

  const validation = () => {
    if (expresions.user_name && expresions.user_email) {
      if (
        expresions.user_name.test(userName.campo) &&
        expresions.user_email.test(userEmail.campo)
      ) {
        setUserName({ ...userName, valido: "true" });
        setUserEmail({ ...userEmail, valido: "true" });
      } else {
        setUserName({ ...userName, valido: "false" });
        setUserEmail({ ...userEmail, valido: "false" });
      }
    }
  };

  const MySwal = withReactContent(Swal);

  const sendEmail = (event) => {
    event.preventDefault();

    const serviceID = "service_3gu69fh";
    const templateID = "template_flax1re";
    const publicKey = "AX3xLgavg3x-kGbkv";

    if (userName.valido === "true" && userEmail.valido === "true") {
      setValidateForm(true);

      setUserName({ campo: "", valido: "" });
      setUserEmail({ campo: "", valido: "" });

      MySwal.fire({
        width: "240px",
        background: "#F9FAFC",
        title: "Sending...",
        timer: 1600,
        timerProgressBar: true,
        didOpen: () => {
          MySwal.showLoading();
        },
      });

      emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          console.log("success!");
        });

      event.target.reset();
    } else {
      setValidateForm(false);
    }
  };

  return (
    <>
      <section id="contact" className="contact-footer">
        <div className="contact">
          <div className="contact-container">
            <div className="label-container">
              <form ref={form} onSubmit={sendEmail} id="form">
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
                      value={userName.campo}
                      onChange={onChangeName}
                      onKeyUp={validation}
                      onBlur={validation}
                      valido={userName.valido}
                      // placeholder={errorNameMessage}
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
                      value={userEmail.campo}
                      onChange={onChangeEmail}
                      onKeyUp={validation}
                      onBlur={validation}
                      valido={userEmail.valido}
                      // placeholder={errorEmailMessage}
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
                {validateForm === false && (
                  <p className="error-send">
                    <b>Error:</b>{" "}
                    <FormattedMessage
                      id="app.error-message"
                      defaultMessage="Please fill in the form correctly."
                    />
                  </p>
                )}
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
