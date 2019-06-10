import React, { Component } from "react";
import "./UserCard.scss";

export default class UserCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="user-card" key={this.props.id}>
        <p>{this.props.name}</p>
        <img src={this.props.image} />
      </div>
    );
  }
}
