import React, { Component } from "react";
import "../sass/_noPost.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="no-post aspectRatioSizer">
        {/* svg maintains square https://codeburst.io/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b*/}
        <svg viewBox="0 0 1 1" />
        <p>{this.props.name} doesn't have any stickies yet!</p>
      </div>
    );
  }
}
