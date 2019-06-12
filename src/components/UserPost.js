import React, { Component } from "react";
import "../sass/_userPost.scss";

export default class UserPost extends Component {
  cropText = (text, charLimit) => {
    if (text && text.length >= charLimit) {
      return text.slice(0, charLimit - 1) + "...";
    }
    return text;
  };

  render() {
    return (
      <div className="user-post aspectRatioSizer">
        {/* svg maintains square https://codeburst.io/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b*/}
        <svg viewBox="0 0 1 1" />
        <div>
          <p>{this.cropText(this.props.content, 56)}</p>
          <p className="poster">- {this.cropText(this.props.poster, 26)}</p>
        </div>
      </div>
    );
  }
}
