import React, { Component } from "react";
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
      return (
        <>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/apartments">Apartments</NavLink>
          </NavItem>
        </Nav>
        <h1>Header top of home page</h1>
        </>
      )
    }
  }
  
  export default Header
  