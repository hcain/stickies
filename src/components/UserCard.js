import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../sass/_userCard.scss";

export default class UserCard extends Component {
  render() {
    return (
      <Link
        key={this.props.id}
        to={`/users/${this.props.id}`}
        className="user-card aspectRatioSizer">
        <svg viewBox="0 0 1 1" />
        <div>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
      </Link>
    );
  }
}
