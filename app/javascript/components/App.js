import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Apartments from './pages/Apartments';
import Home from './pages/Home';
import apts from './mockApts.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apts: apts
    }
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <Router>
          { logged_in &&
            <div>
              <a href={ sign_out_route }>Sign Out</a>
              <Header />
              <Route exact path="/" component={ Home } />
              <Switch>
                <Route path="/apartments"
                render= { () => <Apartments apts= { this.state.apts }  /> } />
              </Switch>
            </div>
          }
          { !logged_in &&
            <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
          }
      </Router>
    )
  }
}

export default App
