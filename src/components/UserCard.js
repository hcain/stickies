import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserCard.scss";

export default class UserCard extends Component {
  render() {
    return (
      <Link
        key={this.props.id}
        to={`/users/${this.props.id}`}
        className="user-card">
        <p>{this.props.name}</p>
        <img src={this.props.image} />
      </Link>
    );
  }
}
