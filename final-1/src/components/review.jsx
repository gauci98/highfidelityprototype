import React, { Component } from "react";
import Footer from "./footer";

class ReviewVote extends Component {
  getAssignedCandidates() {
    // Retrieve the candidates from local storage and filter out any candidates without a preference assigned
    const candidates = localStorage.getItem("candidates");
    const jsonCandidates = [...JSON.parse(candidates)];
    return jsonCandidates.filter(c => c.preference !== 0);
  }

  render() {
    const candidates = this.getAssignedCandidates();
    // If none of the candidates are assigned a preference, inform the user
    if (candidates.length === 0) {
      return (
        <React.Fragment>
          <header>
            <h1 aria-live="assertive">Review page</h1>
            <h2 aria-live="assertive">
              You have not assigned any preferences yet.
            </h2>
          </header>
          <Footer goBack={() => this.props.history.goBack()} />
        </React.Fragment>
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
          <ol>
            {candidates
              .sort((a, b) => a.preference - b.preference)
              .map(c => (
                <li key={c.id}>
                  {/* <img
                    className="party-image"
                    src={this.getPartyImage(c.party)}
                    alt={this.getAltText(c.party)}
                  /> */}
                  <h3>{c.name}</h3>
                  <div>
                    <h4>{c.preference}</h4>
                  </div>
                </li>
              ))}
          </ol>
          <div className="attention-box">
            <i>
              If you would like to change your vote you can do so from the
              ballot
            </i>
          </div>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default ReviewVote;
