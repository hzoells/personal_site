import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './styles/App.scss';
import MenuBar from './MenuBar';
import Background from './Background';
import Contact from './Contact';
import Experience from './Experience'
import Samples from './Samples';
import Hobbies from './Hobbies'

function App() {
  
  return (
    <div className="App">
      <Router>
        <MenuBar/>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/work">
            <Samples/>
          </Route>
          <Route path="/personal">
            <Hobbies />
          </Route>
          <Route path="/">
            <Background/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
