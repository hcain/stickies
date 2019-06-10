import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="wrapper">
            <Navbar />
            <Main />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
