import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inbox from './Inbox';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Inbox}/>
          <Route exact path="/inbox" component={Inbox}/>
        </Switch>		
      </Router>
    </div>
  );
}

export default App;
