import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Apartments from './pages/Apartments';
import Home from './pages/Home';
import mockApts from './mockApts.js';
import ShowApartment from './pages/ShowApartment';
import AddApartment from './pages/AddApartment';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApts
    }
  }

  createNewApt = (newapt) => {
    console.log(newapt)
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
          <Route path="/showapartment/:id" render={ (props) => {
            const id = +props.match.params.id;
            const foundApt = this.state.apartments.find(apt => apt.id === id);
            return <ShowApartment apt = { foundApt } /> 
          }} />
          <Route path="/newapartment" render={ (props) => {
            return <AddApartment createNewApt = { this.createNewApt } />
          }}/>
          <Route path="/notfound" component={ NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
