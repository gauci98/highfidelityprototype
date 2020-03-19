import React, { Component } from "react";
import backicon from "../icons/back.png";

class Footer extends Component {
  // state = {  }
  render() {
    return (
      <nav>
        <button className="back-btn" onClick={this.props.goBack}>
          <img className="back-icon" src={backicon} alt="Go back" />
        </button>
        <button>Help</button>
        <button onClick={() => (window.location.href = "/review")}>
          Review Vote
        </button>
        {/* <button onClick={() => (window.location.href = "/cast")}>
          Cast Vote
        </button> */}
      </nav>
    );
  }
}

export default Footer;
