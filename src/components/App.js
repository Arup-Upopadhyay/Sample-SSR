import React from 'react';
import './App.css';
import Countries from './DropDown';
import Radio from './Radio';
import Checkbox from './Checkbox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Checkbox</Link>
                </li>
                <li>
                  <Link to="/radio">Radio</Link>
                </li>
                <li>
                  <Link to="/country">DropDown</Link>
                </li>
              </ul>
            </nav>


          <Switch>
            <Route path="/radio">
                <Radio />
            </Route>
            <Route path='/country'>
                <Countries />
            </Route>
            <Route path="/">
                <Checkbox />
            </Route>
          </Switch>
        </Router>
    );
}

export default App;
