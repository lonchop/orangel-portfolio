import React, { useState } from "react";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import { FormattedMessage } from "react-intl";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Contact.scss";

export const Contact = () => {
  // La variable de estado "userName" se inicializa con un objeto que tiene dos propiedades: "campo" y "valido".
  const [userName, setUserName] = useState({ campo: "", valido: null });
  // La variable de estado "userEmail" se inicializa de la misma manera que "userName".
  const [userEmail, setUserEmail] = useState({ campo: "", valido: null });

  // Las variables puedes actualizarse utilizando el hook "useState" y la función con sun función actualizadora, que empiezan por set.
  const [validateForm, setValidateForm] = useState(null);
  const [valueName, setValueName] = useState(true);
  const [valueEmail, setValueEmail] = useState(true);

  // La constante "expresions" es un objeto que contiene dos expresiones regulares para validar el nombre de usuario y el correo electrónico.
  const expresions = {
    user_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    user_email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // La función "onChangeName" se ejecuta cada vez que se escribe en el campo de nombre de usuario y actualiza el valor del estado "userName" con el valor del campo de entrada.
  const onChangeName = (e1) => {
    setUserName({ ...userName, campo: e1.target.value });
  };

  // La función "onChangeEmail" se ejecuta de la misma manera que "onChangeName", pero con el campo de correo electrónico.
  const onChangeEmail = (e2) => {
    setUserEmail({ ...userEmail, campo: e2.target.value });
  };

  // La función "validation" se utiliza para validar los campos de entrada utilizando las expresiones regulares y actualizar el valor de "valido" en el estado "userName" y "userEmail" en consecuencia.
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

  // La constante "MySwal" se utiliza para crear una instancia de la biblioteca "SweetAlert" con la función "withReactContent".
  const MySwal = withReactContent(Swal);

  // La función "sendEmail" se ejecuta cuando se envía el formulario y previene el comportamiento predeterminado del formulario.
  const sendEmail = (event) => {
    event.preventDefault();

    // La función valida los campos de entrada utilizando las expresiones regulares y actualiza el valor de "valueName" y "valueEmail" en consecuencia.
    if (expresions.user_name) {
      if (expresions.user_name.test(userName.campo)) {
        setValueName(true);
      } else {
        setValueName(false);
      }
    }

    if (expresions.user_email) {
      if (expresions.user_email.test(userEmail.campo)) {
        setValueEmail(true);
      } else {
        setValueEmail(false);
      }
    }

    // Las constantes "serviceID", "templateID" y "publicKey" son claves proporcionadas por EmailJS que se utilizan para autenticar la solicitud de envío.
    const serviceID = "service_3gu69fh";
    const templateID = "template_flax1re";
    const publicKey = "AX3xLgavg3x-kGbkv";

    // Si los campos de entrada son válidos, el formulario se envía y se muestra una alerta con el progreso del envío utilizando "SweetAlert". Si los campos de entrada son inválidos, se actualiza el valor de "validateForm" para mostrar un mensaje de error.
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
              <form onSubmit={sendEmail} id="form">
                <div className="input-container">
                  <div>
                    <label htmlFor="user_name">
                      <FormattedMessage id="app.name" defaultMessage="Name" />
                    </label>
                    <input
                      type="text"
                      className={`${
                        valueName ? "name-input" : "name-error-input"
                      }`}
                      id="user_name"
                      name="user_name"
                      value={userName.campo}
                      onChange={onChangeName}
                      onKeyUp={validation}
                      onBlur={validation}
                      valido={userName.valido}
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email">
                      <FormattedMessage id="app.email" defaultMessage="Email" />
                    </label>
                    <input
                      type="text"
                      className={`${
                        valueEmail ? "email-input" : "email-error-input"
                      }`}
                      id="user_email"
                      name="user_email"
                      value={userEmail.campo}
                      onChange={onChangeEmail}
                      onKeyUp={validation}
                      onBlur={validation}
                      valido={userEmail.valido}
                    />
                  </div>
                </div>
                <div className="input-container-2">
                  <div className="div">
                    <label htmlFor="message">
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
                <p
                  className={`${
                    validateForm === false ? "error-send" : "error-send-hidden"
                  }`}
                >
                  <b>Error:</b>{" "}
                  <FormattedMessage
                    id="app.error-message"
                    defaultMessage="Please fill in the form correctly."
                  />
                </p>
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
