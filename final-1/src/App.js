import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import getCandidates from "./candidatelist";
import Start from "./components/start";
import Filter from "./components/filter";
import Candidates from "./components/candidates";
import CastVote from "./components/cast";
import SubmitComment from "./components/comment";

function App() {
  // if the loacl storage does not have the candidates, load them
  if (localStorage.getItem("candidates") === null) {
    localStorage.setItem("candidates", JSON.stringify(getCandidates()));
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/filter" component={Filter} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/cast" component={CastVote} />
        <Route path="/submitComment" component={SubmitComment} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
