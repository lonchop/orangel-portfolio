import React from "react";
import profile from "../../assets/portfolio-profile.png";
import "./Hero.scss";

export const Hero = () => {
  return (
    <>
      <header id="hero" className="hero">
        <div className="title-container">
          <h1 className="title-h1">orangel gonzalez</h1>
          <h2 className="title-h2">frontend developer</h2>
        </div>
        <div className="img-container">
          <img src={profile} alt="profile-image" className="profile-image" />
        </div>
        <div className="line"></div>
      </header>
    </>
  );
};
