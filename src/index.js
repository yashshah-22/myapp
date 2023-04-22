import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import VotingCalendar from "./VotingCalendar";
import reportWebVitals from "./reportWebVitals";
//import Feeds from "./Feeds";
import VoterStatus from "./VoterStatus";
import App from './App';
import { BrowserRouter } from "react-router-dom";
//import SpinWheel from "./SpinWheel";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <App/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();