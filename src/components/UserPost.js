import React, { Component } from "react";
import "./UserPost.scss";

export default class UserPost extends Component {
  cropText = (text, charLimit) => {
    if (text.length >= charLimit) {
      return text.slice(0, charLimit - 1) + "...";
    }
    return text;
  };

  render() {
    console.log(this.props);
    return (
      <div className="user-post" key={this.props.key}>
        <p>{this.cropText(this.props.content, 56)}</p>
        <p className="poster">- {this.cropText(this.props.poster, 26)}</p>
      </div>
    );
  }
}
