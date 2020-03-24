import React, { Component } from "react";
import Footer from "./footer";
import backicon from "../icons/back.png";

class Help extends Component {
  state = { display: 0 };
  render() {
    if (this.state.display === 1) {
      return (
        <React.Fragment>
          <header>
            <h1 aria-live="assertive">Assign a preference to the candidate</h1>
          </header>
          <main>
            <ol className="steps-list">
              <li className="steps-item">
                Choose the candidates you want to see on your ballot.
              </li>
              <li className="steps-item">
                Tap on the candidate you want to assign a preference to.
              </li>
              <li className="steps-item">
                Tap on the preference you want to assign to the chosen
                candidate.
              </li>
              <li className="steps-item">
                The chosen preference will appear next to the candidate's name
                in the list of candidates
              </li>
            </ol>
            <button className="">Watch video tutorial</button>
            <button className="">Start voting</button>
          </main>
          <nav>
            <button className="xl-btn">
              <img className="delete-icon" src={backicon} alt=" " />
              Back to help page
            </button>
          </nav>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <header>
          <h1 aria-live="assertive">Help</h1>
          <h2 aria-live="assertive">Select the task you need help with</h2>
        </header>
        <main>
          <ol className="help-list">
            <li
              className="help-item"
              role="button"
              onClick={() => this.setState({ display: 1 })}
            >
              Assign a preference to a candidate
            </li>
            <li className="help-item" role="button">
              Make changes to your vote
            </li>
            <li className="help-item" role="button">
              Delete a preference
            </li>
            <li className="help-item" role="button">
              Delete all preferences
            </li>
            <li className="help-item" role="button">
              Review your vote
            </li>
            <li className="help-item" role="button">
              Cast your vote
            </li>
          </ol>
        </main>
        <Footer goBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default Help;
