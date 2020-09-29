import React from 'react';
import {BrowserRouter as Router,
        Route,
        Link,
        Switch} from 'react-router-dom'

import './App.css';
import { Counter } from '../counter/Counter';
import Board from '../Board/Board'

function App() {
  return (
    <Router>
      <Switch>
        <Route  path='/' exact component={Counter}></Route>
        <Route path='/board' component={Board}></Route>
      </Switch>
    </Router>
  );
}

export default App;
