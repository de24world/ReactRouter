import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/web_project"}>Web Project</Link>
        </li>
        <li>
          <Link to={match.url + "/react_project"}>React Project</Link>
        </li>
        <li>
          <Link to={match.url + "/partner Homepage_project"}>
            Partner Homepage Project
          </Link>
        </li>
      </ul>
      <Switch>
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
