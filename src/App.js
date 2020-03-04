import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RandomGenerator from "./components/RandomGenerator";

function App() {
  var x = require("./components/RandomGenerator");
  console.log(x.randomNumberLists);
  return (
    <Router>
      <Switch>
        <Route exact path="/random">
          <RandomGenerator />
        </Route>
        <Route path="/">
          <div>Root</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
