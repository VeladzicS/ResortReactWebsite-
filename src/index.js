import React from "react";
import ReactDOM from "react-dom";
import { FaRProject } from "react-icons/fa";
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RoomState from "./context/RoomContext/RoomState";

ReactDOM.render(
  <React.StrictMode>
    <RoomState>
      <Router>
        <App />
      </Router>
    </RoomState>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
