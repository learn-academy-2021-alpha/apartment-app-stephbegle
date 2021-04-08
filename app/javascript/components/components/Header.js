import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Nav,
  NavItem
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
      <h1 className="app-title">Apartment Hunter</h1>
      <Nav className="navbar">
        <NavItem className="navlink">
          <NavLink to="/">Home</NavLink>
        </NavItem>

        <NavItem className="navlink">
          <NavLink to="/apartments">Apartments</NavLink>
        </NavItem>

        <NavItem className="navlink">
          <NavLink to="/newapartment">Add Listing</NavLink>
        </NavItem>

        { logged_in &&
          <NavItem className="navlink">
              <a href={ sign_out_route }>Sign Out</a>
          </NavItem>}
          { !logged_in &&
          <NavItem className="navlink">
            <a href={ sign_in_route }>Sign In</a>
          </NavItem>
        }
      </Nav>
      </>
    )
  }
}
  
export default Header
  