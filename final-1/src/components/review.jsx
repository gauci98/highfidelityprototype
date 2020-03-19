import React, { Component } from "react";
import Alert from "./alert";
import Footer from "./footer";
import soicon from "../icons/startover.png";
import casticon from "../icons/vote.png";

class ReviewVote extends Component {
  state = { display: 0 };
  getAssignedCandidates() {
    // Retrieve the candidates from local storage and filter out any candidates without a preference assigned
    const candidates = localStorage.getItem("candidates");
    const jsonCandidates = [...JSON.parse(candidates)];
    return jsonCandidates.filter(c => c.preference !== 0);
  }

  getStyle(partyId) {
    console.log(partyId);
    var class_name = "candidate-box";

    if (partyId === 1) {
      class_name += " yellow-border";
    } else if (partyId === 2) {
      class_name += " pink-border";
    } else if (partyId === 3) {
      class_name += " orange-border";
    } else if (partyId === 4) {
      class_name += " green-border";
    }
    return class_name;
  }

  startOver() {
    localStorage.clear();
    window.location.href = "/filter";
  }

  render() {
    const candidates = this.getAssignedCandidates();
    // If none of the candidates are assigned a preference, inform the user
    if (this.state.display === 0 && candidates.length === 0) {
      return (
        <React.Fragment>
          <header>
            <h1 aria-live="assertive">Review page</h1>
            <h2 aria-live="assertive">
              You have not assigned any preferences yet.
            </h2>
          </header>
          <main>
            <button
              className="rev-btn"
              onClick={() => (window.location.href = "/cast")}
            >
              <img className="rev-icon" id="cast-icon" src={casticon} />
              Cast vote
            </button>
          </main>
          <Footer goBack={() => this.props.history.goBack()} />
        </React.Fragment>
      );
    } else if (this.state.display === 1) {
      return (
        <Alert
          title="Are you sure you want to delete all your assigned preferences?"
          btn1="Yes"
          btn1Action={this.startOver}
          btn2="No"
          btn2Action={() => (window.location.href = "/review")}
        />
      );
    }

    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">Review page</h1>
          <h2>
            The following are the candidates you have assigned preference to in
            ascending order of preference
          </h2>
        </header>
        <main>
          <ol className="candidates-container" id="review-container" l>
            {candidates
              .sort((a, b) => a.preference - b.preference)
              .map(c => (
                <li className={this.getStyle(c.party)} role="button" key={c.id}>
                  <h3>{c.name}</h3>
                  <img
                    className="candidate-img"
                    src={require("../" + c.image)}
                    alt=" "
                  />
                  <div className="preference-box">
                    <h4>{c.preference}</h4>
                  </div>
                </li>
              ))}
          </ol>
          <button
            className="rev-btn"
            onClick={() => (window.location.href = "/cast")}
          >
            <img className="rev-icon" id="cast-icon" src={casticon} />
            Cast vote
          </button>
          <button
            className="rev-btn"
            onClick={() => this.setState({ display: 1 })}
          >
            <img className="rev-icon" src={soicon} />
            Start over
          </button>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default ReviewVote;
