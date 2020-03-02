import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomGenerator from './components/RandomGenerator';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/random'>
          <RandomGenerator/>  
        </Route>
        <Route path='/'>
          <div>Root</div>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
