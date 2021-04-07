import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Apartments extends Component {
  render() {
    return (
      <>
      <h1>Apartments list page</h1>
      <ul>
        { this.props.apartments.map(apt => {
          return (
            <li key={ apt.id }>
              { apt.city }
              <img src={ apt.img } />
            </li>
          )
        })}
      </ul>
      </>
    )
  }
}

export default Apartments

