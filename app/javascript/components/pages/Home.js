import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import Typed from "react-typed";

class Home extends Component {
    render() {
      return (
        <>
        <Jumbotron className="home-jumbo">
          <Typed
                className="typed-text"
                strings={["Find your new home!", "Beautiful homes"]}
                typeSpeed={80}
                backSpeed={40}
                loop
                />
        </Jumbotron>
        <img className="home-img" src="https://hips.hearstapps.com/hbu.h-cdn.co/assets/16/23/3200x1600/landscape-1465491765-apartment.jpg?resize=1200:*" />
        </>
      )
    }
  }
  
  export default Home