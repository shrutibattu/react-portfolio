import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Home from "../Home";
const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
