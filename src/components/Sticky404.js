import React, { Component } from "react";
import "../sass/_sticky404.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="sticky404">
        <p>404!</p>
        <p>Go back the way you came!</p>
      </div>
    );
  }
}
