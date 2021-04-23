import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Budget-Tracker',
      description: 'PWA',
      link: "https://budgettracker2021.herokuapp.com",
      repo: "https://github.com/Neeko623/Budget-Tracker"
    },
    {
      name: 'Milestone',
      description: 'Full Stack',
      link: "https://milestone-goals.herokuapp.com",
      repo: "https://github.com/proj2gr4/Milestone-Project"
    },
    {
      name: 'Run-Buddy',
      description: 'HTML/CSS',
      link: "https://neeko623.github.io/Run-Buddy-Website/",
      repo: "https://github.com/Neeko623/Run-Buddy-Website"
    },
    {
      name: 'Poke-Parte',
      description: 'Project One',
      link: "https://damn-ma-6.github.io/Poke-Parte/",
      repo: "https://github.com/damn-ma-6/Poke-Parte"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
