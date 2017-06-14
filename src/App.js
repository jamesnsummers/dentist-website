import React, { Component } from 'react'
import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <NavLink to="/" activeClassName="selected">Home</NavLink>{' '}
            <NavLink to="/procedures" activeClassName="selected">Procedures</NavLink>{' '}
            <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
