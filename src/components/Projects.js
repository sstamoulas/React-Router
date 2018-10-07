import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import GameProject from "./GameProject.js";
import ReactProject from "./ReactProject.js";
import DatabaseProject from "./DatabaseProject.js";
import MachineLearningProject from "./MachineLearningProject.js";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/game-project"}>Game Project</Link>
        </li>
        <li>
          <Link to={match.url + "/react-project"}>React Project</Link>
        </li>
        <li>
          <Link to={match.url + "/database-project"}>Database Project</Link>
        </li>
        <li>
          <Link to={match.url + "/machine-learning-project"}>
            Machine Learning Project
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={match.url + "/game-project"} component={GameProject} />
        <Route path={match.url + "/react-project"} component={ReactProject} />
        <Route
          path={match.url + "/database-project"}
          component={DatabaseProject}
        />
        <Route
          path={match.url + "/machine-learning-project"}
          component={MachineLearningProject}
        />

        <Route
          exact
          path={match.url}
          render={() => <div>Pick a project to view!</div>}
        />
      </Switch>
    </div>
  );
};

export default Projects;
