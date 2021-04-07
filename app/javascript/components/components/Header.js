import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';

import {
  Nav,
  NavItem,
  NavbarBrand
} from 'reactstrap';

class Header extends Component {
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
      <NavbarBrand className="app-title" href="/">Apartment Hunter</NavbarBrand>
      <Nav className="navbar">
        <NavItem className="navlink">
          <NavLink to="/">Home</NavLink>
        </NavItem>

        <NavItem className="navlink">
          <NavLink to="/apartments">Apartments</NavLink>
        </NavItem>

        { logged_in &&
          <NavItem className="navlink">
              <a href={ sign_out_route }>Sign Out</a>
          </NavItem>}
          { !logged_in &&
          <NavItem className="navlink">
            <a href={sign_in_route }>Sign In</a>
          </NavItem>
        }
      </Nav>
      <h1>Header top of home page</h1>
      </>
    )
  }
}
  
  export default Header
  