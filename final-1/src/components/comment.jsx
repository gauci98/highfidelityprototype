import React, { Component } from "react";

class SubmitComment extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">Add a comment to your vote</h1>
        </header>
        <main>
          <label>Enter your comment:</label>
          <input></input>

          <button>Cast vote</button>
          <button onClick={() => this.props.history.goBack()}>Go back</button>
        </main>
      </React.Fragment>
    );
  }
}

export default SubmitComment;
