import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Trading from "./Pages/Trading";

const App = () => {
  return (

    <div className="appRoot">

      <Router>

        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/crypto-trading">
            <Trading/>
          </Route>
        </Switch>

      </Router>

    </div>

  );
};

export default App;
