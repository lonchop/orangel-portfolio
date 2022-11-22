import React from "react";
import { FormattedMessage } from "react-intl";
import "./Card.scss";

export const Card = ({ title, description, img, repo, demo }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <div className="card-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="btn-card-container">
            <a target="_blank" href={repo}>
              <button className="btn-card">
                <p>GitHub</p>
              </button>
            </a>
            <a target="_blank" href={demo}>
              <button className="btn-card">
                <p><FormattedMessage id="app.view-demo" defaultMessage="View Demo"/></p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
