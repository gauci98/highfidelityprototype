import React, { Component } from "react";
import Footer from "./footer";
import casticon from "../icons/vote.png";

class SubmitComment extends Component {
  castVote() {
    localStorage.setItem("protest vote", true);
    window.location.href = "/cast";
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">Add a comment to your vote</h1>
          <h2>This can be left empty.</h2>
        </header>
        <main>
          <label htmlFor="comment">Enter your comment</label>
          <i>(This can be left empty)</i>
          <input id="comment" type="text"></input>
          <button className="rev-btn" onClick={() => this.castVote()}>
            <img className="rev-icon" id="cast-icon" src={casticon} />
            Cast vote
          </button>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default SubmitComment;
