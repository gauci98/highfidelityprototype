import React, { Component } from "react";
import Alert from "./alert";
import Footer from "./footer";

class CastVote extends Component {
  state = { display: 0 };

  goToSubmitComment = () => {
    console.log("go to submit comment");
    window.location.href = "/submitComment";
  };

  render() {
    if (this.state.display === 0) {
      return (
        <React.Fragment>
          <header>
            <h1 aria-live="assertive">Cast Vote</h1>
          </header>
          <main>
            <h2>Valid/invalid</h2>
            <h3>details</h3>
            <button onClick={() => this.setState({ display: 1 })}>
              Cast vote
            </button>
          </main>
          <Footer goBack={() => this.props.history.goBack()} />
        </React.Fragment>
      );
    } else if (this.state.display === 1) {
      return (
        <Alert
          from="cast"
          title="Would you like to submit a comment with your vote?"
          btn1="Yes"
          btn2="No"
          btn1Action={this.goToSubmitComment}
          btn2Action={() => this.setState({ display: 2 })}
        />
      );
    } else if (this.state.display === 2) {
      return (
        <Alert
          from="cast"
          title="Are you sure you want to submit your vote?"
          btn1="Yes"
          btn2="No"
          btn1Action={() => console.log("Yes")}
          btn2Action={() => console.log("No")}
        />
      );
    }
  }
}

export default CastVote;
