import React from 'react'
import cvIcon from '../../assets/cv-icon.svg'
import { FormattedMessage } from 'react-intl'
// import about from "../../lang/en-US.json"
import './About.scss'

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="about"
      >
        <div className="btn-download-container">
          <a
            href="https://drive.google.com/file/d/16V4qyS2QLfyMPgxWMRRfADwv2ytFiAzo/view?usp=sharing"
            target="_blank"
            className="link-cv"
          >
            <button className="btn-download">
              <img
                src={cvIcon}
                alt="cv-icon"
              />
              <p>
                <FormattedMessage
                  id="app.btn-cv"
                  defaultMessage="Download CV"
                />
              </p>
            </button>
          </a>
        </div>
        <div className="text-about-container">
          <p className="text-about">
            <FormattedMessage
              id="app.text-about"
              defaultMessage="I am a frontend developer, I focus on making web applications using HTML, CSS, JavaScript and frameworks such as tailwind and React, in order to drive projects. My goal is to develop web applications for Startups in the technology industry, remotely."
            />
          </p>
        </div>
      </section>
    </>
  )
}
