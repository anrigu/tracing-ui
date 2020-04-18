import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RandomGenerator from "./components/RandomGenerator";
import MainLayout from "./MainLayout";
import BoxList from "./switchBox/BoxList";
import InsertionSort from './components/InsertionSort';
import store from "./configStore";
import { Provider } from 'react-redux';
import UserInput from './userCode/UserInput';
import BubbleSort from './components/BubbleSort';

/**
 * Function used to route certain url's to different components
 */
function App() {
  var x = require("./components/RandomGenerator");
  return (
    <Provider store = {store}>
    <Router>
      <Switch>
        <Route exact path="/random">
          <RandomGenerator />
        </Route>
        <Route exact path="/binary-search">
          <BoxList />
        </Route>
        <Route exact path="/selection-sort">
          <RandomGenerator />
        </Route>
        <Route exact path="/insertion-sort">
          <InsertionSort></InsertionSort>
        </Route>
        <Route exact path="/bubble-sort">
          <BubbleSort />
        </Route>
        <Route exact path="/user-code">
          <UserInput />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
