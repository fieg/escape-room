import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// views
import Home from "views/Home";
import Reserve from "views/Reserve";
import Contact from "views/Contact";
import UpsellView from "views/Upsell";
import Overview from "views/Overview";
import Pay from "views/Pay";
import Success from "views/Success";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reserveren">
          <Reserve />
        </Route>
        <Route exact path="/reserveren/contact">
          <Contact />
        </Route>
        <Route exact path="/reserveren/food">
          <UpsellView />
        </Route>
        <Route exact path="/reserveren/overzicht">
          <Overview />
        </Route>
        <Route exact path="/reserveren/betalen">
          <Pay />
        </Route>
        <Route exact path="/reserveren/success">
          <Success />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

function NotFound() {
  return <h1>404</h1>;
}
