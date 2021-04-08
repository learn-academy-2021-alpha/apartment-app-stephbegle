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
        <img className="home-img-1" src="https://images.unsplash.com/photo-1523623169910-dad45c0fd21c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <img className="home-img-2" src="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" />
        <img className="home-img-3" src="https://images.unsplash.com/photo-1495715462286-6643636edda2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1025&q=80" />
        <img className="home-img-4" src="https://images.unsplash.com/photo-1597047084993-bf337e09ede0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </>
      )
    }
  }
  
  export default Home