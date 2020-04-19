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
  return (
    <Provider store = {store}>
    <Router>
      <Switch>
        <Route exact path="/random">
          {/* temp path component */}
          <MainLayout Component = {<RandomGenerator/>}/>
        </Route>
        <Route exact path="/binary-search">
        <MainLayout Component = {<BoxList/>}/>
        </Route>
        <Route exact path="/selection-sort">
        <MainLayout Component = {<RandomGenerator/>}/>
        </Route>
        <Route exact path="/insertion-sort">
        <MainLayout Component = {<InsertionSort/>}/>
        </Route>
        <Route exact path="/bubble-sort">
        <MainLayout Component = {<BubbleSort/>}/>
        </Route>
        <Route exact path="/user-code">
        <MainLayout Component = {<UserInput/>}/>
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
