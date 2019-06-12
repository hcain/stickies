import React, { Component } from "react";
import "../sass/_footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          Built by Hannah Cain. Find me on{" "}
          <a
            href="https://github.com/hcain"
            target="_blank"
            rel="noopener noreferrer">
            Github
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/hannahcain"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
    );
  }
}
