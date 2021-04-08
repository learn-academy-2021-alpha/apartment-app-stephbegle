import React, { Component } from 'react';

class ShowApartment extends Component {

  render() {
    const apt = this.props.apt;
    
    return (
      <>
      <h2>Rent: { apt.price}</h2>
      <h3>{ apt.title }</h3>
      <h4>Street: { apt.street } St., { apt.city }, { apt.state}</h4>
      <h4>Bedrooms: { apt.bedrooms}</h4>
      <h4>Bathrooms: { apt.bathrooms}</h4>
      <h4>Pets allowed: { apt.pets}</h4>
      </>
    )
  }
}
export default ShowApartment