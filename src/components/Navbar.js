import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    console.log("navbar", this.props);
    return (
      <div className="navbar">
        <h1 className="site-name">Stickies</h1>
        <NavLink
          exact
          path
          to="/"
          activeClassName="active"
          className="navbar-home">
          <img className="home-icon" />
        </NavLink>
        <div className="dropdown navbar-user-menu">
          <img className="user-icon" />
          <div className="dropdown-content">
            <NavLink
              to="/users/:userid"
              activeClassName="active"
              className="navbar-user"
            />
          </div>
        </div>
      </div>
    );
  }
}
