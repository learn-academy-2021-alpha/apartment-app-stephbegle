import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Apartments from './pages/Apartments';
import Home from './pages/Home';

class App extends React.Component {
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
        <Switch>
        { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
        <Route exact path="/" component={ Home } />
        <Route path="/apartments" component={ Apartments } />
        {/* <Route path= component={ Addapartment } */}
        </Switch>
      </Router>
    )
  }
}

export default App
