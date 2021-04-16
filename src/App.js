import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Pomodoro from "./components/Pomodoro";
import Counter from "./components/Counter";
import News from "./components/News";
import Error from "./components/Error";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
