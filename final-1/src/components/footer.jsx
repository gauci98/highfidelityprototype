import React, { Component } from "react";

class Footer extends Component {
  // state = {  }
  render() {
    return (
      <footer>
        <button onClick={this.props.goBack}>Back</button>
        <button>Help</button>
        <button onClick={() => (window.location.href = "/review")}>
          Review Vote
        </button>
        <button onClick={() => (window.location.href = "/cast")}>
          Cast Vote
        </button>
      </footer>
    );
  }
}

export default Footer;
