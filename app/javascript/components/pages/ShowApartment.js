import React, { Component } from 'react';

class ShowApartment extends Component {

  render() {
    const apt = this.props.apt;
    
    return (
      <>
      <h2>{ apt.title }</h2>
      <img src={ apt.img}/>
      <h3>Rent: { apt.price}</h3>
      <h5>2547 { apt.street } St., { apt.city }, { apt.state}</h5>
      <h5>Bedrooms: { apt.bedrooms}</h5>
      <h5>Bathrooms: { apt.bathrooms}</h5>
      <h5>Pets allowed: { apt.pets}</h5>
      <h6>Date Created: { apt.created_at}</h6>
      </>
    )
  }
}

export default ShowApartment