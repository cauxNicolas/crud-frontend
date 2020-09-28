import React from "react";
import "./App.css";
// navigation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// containers
import Login from "./containers/Login";
import Signup from "./containers/Signup";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
