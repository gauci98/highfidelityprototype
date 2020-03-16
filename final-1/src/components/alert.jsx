import React, { Component } from "react";

class Alert extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.btn1Action}>{this.props.btn1}</button>
        <button onClick={this.props.btn2Action}>{this.props.btn2}</button>
      </React.Fragment>
    );
  }
}

export default Alert;
