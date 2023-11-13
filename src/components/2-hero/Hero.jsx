import React from "react";
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
          <img
            src="https://i.postimg.cc/7YCDh4hF/portfolio-profile.png"
            alt="profile-image"
            className="profile-image"
          />
        </div>
        <div className="line"></div>
      </header>
    </>
  );
};
