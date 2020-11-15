import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PureBasic from "./pages/redux/Pure";
import ReactUse from "./pages/redux/ReactUse";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/redux/pure">pure-redux</Link>
          </li>
          <li>
            <Link to="/redux/react">react-redux</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/redux/pure">
            <PureBasic />
          </Route>
          <Route exact path="/redux/react">
            <ReactUse />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
