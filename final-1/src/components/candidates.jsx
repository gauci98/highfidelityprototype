import React, { Component } from "react";
import Footer from "./footer";

class Candidates extends Component {
  // state = {  }

  showPartyCandidates(partyId, party_style) {
    const candidates = this.getFilteredCandidates(partyId);
    return (
      <React.Fragment>
        <h2 className={party_style}>Party {partyId}</h2>
        <ol className={party_style}>
          {candidates
            .sort((a, b) => a.party - b.party)
            .map(c => (
              <li
                className="candidate-box"
                role="button"
                key={c.id}
                onClick={() => this.goToPreferences(c.name)}
              >
                <h3>{c.name}</h3>

                <img
                  className="candidate-img"
                  src={require("../" + c.image)}
                  alt=" "
                />
                {/* Show the candidate's assigned preference */}
                {this.showPreference(c.preference)}
              </li>
            ))}
        </ol>
      </React.Fragment>
    );
  }

  getFilteredCandidates = partyId => {
    // Retrieve all candidates from local storage and filter them by party
    // The party identifier is passed through the props from component to component
    const candidates = localStorage.getItem("candidates");
    if (partyId === 0) {
      // if the user wants to view all candidates, skip the filterng part
      return JSON.parse(candidates);
    } else {
      const jsonCandidates = [...JSON.parse(candidates)];
      return jsonCandidates.filter(c => c.party === partyId);
    }
  };

  showPreference(preference) {
    // If the candidate is not assigned a preference yet, do not display anything
    if (preference === 0) {
      return "";
    }
    return (
      //If the candidate is assigned a preference, display it next to the candidate
      <div className="preference-box">
        <h4>{preference}</h4>
      </div>
    );
  }

  goToPreferences(candidateName) {
    localStorage.setItem("chosenCandidate", candidateName);
    window.location.href = "/preferences";
  }

  render() {
    var party_filter = localStorage.getItem("partyFilter");
    var party_style = "";
    party_filter = parseInt(party_filter);
    const candidates = this.getFilteredCandidates(party_filter);

    if (party_filter === 1) {
      party_style = "yellow-background";
    } else if (party_filter === 2) {
      party_style = "pink-background";
    } else if (party_filter === 3) {
      party_style = "orange-background";
    } else if (party_filter === 4) {
      party_style = "green-background";
    }

    if (party_filter === 0) {
      return (
        <React.Fragment>
          <header>
            {/* <h1 aria-live="assertive">{header_text}</h1> */}
            <h1 aria-live="assertive">Choose a candidate</h1>
          </header>
          <main className="candidates-container">
            {this.showPartyCandidates(1, "yellow-background")}
            {this.showPartyCandidates(2, "pink-background")}
            {this.showPartyCandidates(3, "orange-background")}
            {this.showPartyCandidates(4, "green-background")}
          </main>
          <Footer goBack={() => (window.location.href = "/")} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <header>
            {/* <h1 aria-live="assertive">{header_text}</h1> */}
            <h1 aria-live="assertive">Choose a candidate</h1>
          </header>
          <main className="candidates-container">
            <h2 className={party_style}>Party {party_filter}</h2>
            <ol className={party_style}>
              {candidates
                .sort((a, b) => a.party - b.party)
                .map(c => (
                  <li
                    className="candidate-box"
                    role="button"
                    key={c.id}
                    onClick={() => this.goToPreferences(c.name)}
                  >
                    <h3>{c.name}</h3>
                    <img
                      className="candidate-img"
                      src={require("../" + c.image)}
                      alt=" "
                    />
                    {/* Show the candidate's assigned preference */}
                    {this.showPreference(c.preference)}
                  </li>
                ))}
            </ol>
          </main>
          <Footer goBack={() => (window.location.href = "/")} />
        </React.Fragment>
      );
    }
  }
}

export default Candidates;
