import React, { Component } from "react";
import backicon from "../icons/back.png";
import helpicon from "../icons/help.png";
import casticon from "../icons/vote-black.png";

class Footer extends Component {
  getStyle(class_name) {
    var path = window.location.pathname;
    if (class_name === "lrg-btn" && path === "/review") {
      class_name += " hidden";
    } else if (class_name === "back-btn" && path === "/") {
      class_name += " hidden";
    } else if ((class_name === "lrg-btn") & (path === "/submitComment")) {
      class_name += " hidden";
    }
    return class_name;
  }

  render() {
    return (
      <nav>
        <button
          className={this.getStyle("back-btn")}
          onClick={this.props.goBack}
          style={{
            backgroundColor: "#FF6600"
          }}
        >
          <img className="back-icon" src={backicon} alt="Go back" />
        </button>
        <button
          className="back-btn"
          style={{
            backgroundColor: "#b3d9ff"
          }}
        >
          <img className="back-icon" src={helpicon} alt="help" />
        </button>
        <button
          className={this.getStyle("lrg-btn")}
          onClick={() => (window.location.href = "/review")}
          style={{
            backgroundColor: "#00D100"
          }}
        >
          <img className="delete-icon" src={casticon} alt=" " />
          Review and cast your vote
        </button>
      </nav>
    );
  }
}

export default Footer;
