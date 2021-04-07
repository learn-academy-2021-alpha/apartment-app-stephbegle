import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Apartments from './pages/Apartments';
import Home from './pages/Home';
import mockApts from './mockApts.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApts
    }
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      sign_up_route
    } = this.props

    return (
      <Router>
        <Header
          logged_in={ logged_in }
          sign_in_route={ sign_in_route}
          sign_out_route={ sign_out_route}
          sign_up_route={ sign_up_route}
        />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/apartments" render= { (props) => <Apartments apartments={ this.state.apartments } />} 
          />
        </Switch>
      </Router>
    )
  }
}

export default App
