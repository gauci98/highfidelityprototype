import React, { Component } from "react";

class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">
            Election for Members of European Parliament
          </h1>
        </header>
        <main>
          <button>How to cast your vote</button>
          <button onClick={() => (window.location.href = "/filter")}>
            Start voting
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default Start;
