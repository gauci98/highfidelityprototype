import React, { Component } from "react";
import Alert from "./alert";
import Footer from "./footer";

class CastVote extends Component {
  displayCommentBtn() {
    // Retrieve the candidates from local storage and filter out any candidates without a preference assigned
    const candidates = localStorage.getItem("candidates");
    var jsonCandidates = [...JSON.parse(candidates)];
    jsonCandidates = jsonCandidates.filter(c => c.preference !== 0);
    if (jsonCandidates.length === 0) {
      return (
        <button onClick={() => (window.location.href = "/submitComment")}>
          Add a comment
        </button>
      );
    }
    return "";
  }

  goToSubmitComment = () => {
    console.log("go to submit comment");
    window.location.href = "/submitComment";
  };

  isVoteValid() {
    // Check if the vote is valid (the preferences are assigned in a sequence from 1 upwards)
    // Returns true if the vote is valid, false otherwise
    const candidates = localStorage.getItem("candidates");
    var preferences = JSON.parse(candidates)
      .sort((a, b) => a.preference - b.preference)
      .map(c => c.preference);
    var unique = [...new Set(preferences)];
    // console.log(unique);

    if (unique.length === 1 && unique[0] === 0) {
      return 0;
    }

    //if all candidates are assigned a preference
    if (unique.length === 15 && unique[0] === 1) {
      return 0;
    }

    if (unique[0] !== 0) {
      return 1;
    }
    for (var i = 1; i < unique.length; i++) {
      // console.log("i", i);
      if (unique[i] - unique[i - 1] !== 1) {
        return unique[i - 1] + 1;
      }
    }

    return 0;
  }

  render() {
    var valid = this.isVoteValid();
    if (valid === 0) {
      return (
        <React.Fragment>
          <header>
            <h1 aria-live="assertive">Your vote is valid.</h1>
            <h2>Please tap 'Cast Vote' to officially cast your vote</h2>
          </header>
          <main>
            <i>This action is irreversable.</i>
            <br></br>
            <i>
              Please make sure you are casting your intended vote by reviewing
              your vote.
            </i>
            {this.displayCommentBtn()}
            <button onClick={() => (window.location.href = "/finish")}>
              Cast vote
            </button>
          </main>
          <Footer goBack={() => this.props.history.goBack()} />
        </React.Fragment>
      );
    } else {
      var msg =
        "Please assign preference number " +
        valid +
        " before casting your vote";
      return (
        <React.Fragment>
          <header>
            <h1 aria-live="assertive">Your vote is invalid.</h1>
            <h2 aria-live="assertive">{msg}</h2>
          </header>
          <main></main>
          <Footer goBack={() => this.props.history.goBack()} />
        </React.Fragment>
      );
    }
  }
}

export default CastVote;
