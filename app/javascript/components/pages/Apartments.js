import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Apartments extends Component {
  render() {
    return (
      <>
      <h1>Apartments list page</h1>
      <ul>
        { this.props.apts.map(apt => {
          return (
            <li key={ apt.id }>
              { apt.city }
            </li>
          )
        })}
      </ul>
      </>
    )
    
  }
}
export default Apartments