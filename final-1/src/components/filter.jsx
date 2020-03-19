import React, { Component } from "react";
import Footer from "./footer";

class Filter extends Component {
  // state = {  }
  goToCandidates = x => {
    // redirect to the list of candidates, passing along the party chosen from the filter
    // the party identifier is necassary to filter the candidates
    localStorage.setItem("partyFilter", x);
    window.location.href = "/candidates";
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">Filter Candidates by Party</h1>
          <h2 aria-live="assertive">
            Choose the candidates you want to see on your ballot
          </h2>
        </header>
        <main>
          <button
            className="filter-btn"
            style={{ marginTop: "1vh" }}
            onClick={() => this.goToCandidates(0)}
          >
            View all candidates
          </button>
          <button
            className="filter-btn yellow-border"
            onClick={() => this.goToCandidates(1)}
          >
            View Party 1 candidates only
          </button>
          <button
            className="filter-btn pink-border"
            onClick={() => this.goToCandidates(2)}
          >
            View Party 2 candidates only
          </button>
          <button
            className="filter-btn orange-border"
            onClick={() => this.goToCandidates(3)}
          >
            View Party 3 candidates only
          </button>
          <button
            className="filter-btn green-border"
            onClick={() => this.goToCandidates(4)}
          >
            View Party 4 candidates only
          </button>
          <button
            className="filter-btn"
            onClick={() => (window.location.href = "/submitComment")}
          >
            Cast a protest vote
          </button>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default Filter;
