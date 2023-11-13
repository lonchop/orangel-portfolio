import React from "react";
import { Card } from "./sub-component/Card";
import DataProjects from "../../DataProjects";
import { FormattedMessage } from "react-intl";
import "./Projects.scss";

export const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <h2>
          <FormattedMessage id="app.title-project" defaultMessage="Projects"/>
        </h2>
        <div className="cards-container">
          {DataProjects.info.map((DataProject) => (
            <Card
              title={DataProject.title}
              description={DataProject.description}
              img={DataProject.img}
              repo={DataProject.repo}
              demo={DataProject.demo}
              key={DataProject.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};
