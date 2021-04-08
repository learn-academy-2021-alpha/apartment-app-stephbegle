import React, { Component } from "react";

class NotFound extends Component {
    
    render() {
      return (
        <>
        <div className="not-found">
            <div className="error-message">
                Uh oh! Something went wrong :(</div>
            <img className="error-img" src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/2QB7K2TGLRHFPHKTVY5LL2DZ5Q.jpg"
                alt="Something went wrong error message"/>
        </div>
        </>
      )
    }
  }
  
  export default NotFound