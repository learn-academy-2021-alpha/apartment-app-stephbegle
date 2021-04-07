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
      {/* need to add key id to be able to show each apartment */}
      <div className="apt-index-container">
        <h1 className="apt-index-title">Apartment Listings</h1>
        <div className="card-spacing">
          { this.props.apartments.map(apt => {
            return (
              <Card className="apt-cards">
              <CardImg top width="100%" src={ apt.img } alt="Card image cap" />
                <CardBody key={ apt.id }>
                <CardTitle tag="h5">{ apt.title }</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{ apt.city }, { apt.state}</CardSubtitle>
                <CardText>{ apt.bedrooms } Bed/{ apt.bathrooms }Bath. A beautiful apartment on { apt.street } St.</CardText>
                <Button href={`/showapartment/${apt.id}`}>Take a look</Button>
              </CardBody>
            </Card>
            )
          })}
        </div>
      </div>
      </>
    )
  }
}

export default Apartments

