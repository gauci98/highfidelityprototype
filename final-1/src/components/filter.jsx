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
          <button onClick={() => this.goToCandidates(0)}>
            View all candidates
          </button>
          <button onClick={() => this.goToCandidates(1)}>
            View Party 1 candidates only
          </button>
          <button onClick={() => this.goToCandidates(2)}>
            View Party 2 candidates only
          </button>
          <button onClick={() => this.goToCandidates(3)}>
            View Party 3 candidates only
          </button>
          <button onClick={() => this.goToCandidates(4)}>
            View Party 4 candidates only
          </button>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default Filter;
