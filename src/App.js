import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Inbox from './Inbox';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div>
      <Router>
        <Switch>
        <Route exact path="/inbox" component={Inbox}/>
          <Route path="/">
            <Redirect to="/inbox" />
          </Route>
        </Switch>		
      </Router>
    </div>
  );
}

export default App;
