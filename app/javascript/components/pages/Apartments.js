import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, 
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class Apartments extends Component {

  render() {
    let { apartments } = this.props
    return (
      <>
      {/* need to add key id to be able to show each apartment */}
      <div className="apt-index-container">
        <h1 className="apt-index-title">Listings:</h1>
        <div className="card-spacing">

          { apartments.map(apt => {
            return (
              <Card key={ apt.id }
                    className="apt-cards">
                <CardImg top width="100%"
                        src={ apt.img }
                        alt="Card image cap" />
                <CardBody>
                    <CardTitle 
                      tag="h5">{ apt.title }
                    </CardTitle>
                    <CardSubtitle 
                      tag="h6"
                      className="mb-2 text-muted">
                      { apt.city }, { apt.state}
                    </CardSubtitle>
                    <CardText>
                      { apt.bedrooms } Bed/{ apt.bathrooms } Bath
                        <br />
                        A fabulous apartment on { apt.street } St.
                    </CardText>
                  <Button style={{background:"rgb(94, 131, 138)"}}
                          href={`/showapartment/${apt.id}`}>
                            Take a look
                  </Button>
                </CardBody>
                <div className="cursor"></div>
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

