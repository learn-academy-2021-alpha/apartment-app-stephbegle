import React, { Component } from 'react';

class ShowApartment extends Component {

  render() {
    const apts = this.props.apartments;
    
    return (
      <>
      <h2>Price: { apts.price}</h2>
      <h3>{ apts.title }</h3>
      <h4>Street: { apts.street } St., { apts.city }, { apts.state}</h4>
      <h4>Bedrooms: { apts.bedrooms}</h4>
      <h4>Bathrooms: { apts.bathrooms}</h4>
      <h4>Bathrooms: { apts.bathrooms}</h4>
      <h4>Pets allowed: { apts.pets}</h4>
      </>
    )
  }
}
export default ShowApartment