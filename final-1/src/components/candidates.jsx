import React, { Component } from "react";
import Footer from "./footer";

class Candidates extends Component {
  // state = {  }

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

  render() {
    var party_filter = localStorage.getItem("partyFilter");
    party_filter = parseInt(party_filter);
    const candidates = this.getFilteredCandidates(party_filter);
    console.log(candidates);

    var header_text = "List of ";
    if (party_filter === 0) {
      header_text += "all candidates";
    } else {
      header_text += "candidates from Party ";
      header_text += party_filter;
    }

    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">{header_text}</h1>
        </header>
        <main>
          <ol>
            {candidates
              .sort((a, b) => a.party - b.party)
              .map(c => (
                <li
                  role="button"
                  key={c.id}
                  // onClick={() => this.goToPreferences(c.name)}
                >
                  {/* <img
                    className="party-image"
                    src={this.getPartyImage(c.party)}
                    alt={this.getAltText(c.party)}
                  /> */}
                  <h3>{c.fullname}</h3>
                  {/* Show the candidate's assigned preference */}
                  {/* {this.showPreference(c.preference)} */}
                </li>
              ))}
          </ol>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default Candidates;
