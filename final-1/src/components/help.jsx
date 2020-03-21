import React, { Component } from "react";
import Footer from "./footer";

class Help extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <h1>Help</h1>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default Help;
