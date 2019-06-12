import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../sass/_navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="site-name">
          <h1>Stickies</h1>
        </Link>
        <NavLink exact to="/" activeClassName="active" className="navbar-home">
          {/* needs to be span instead of img because of firefox bug */}
          <span className="home-icon" />
        </NavLink>
        {/* Would have liked to have added dropdown menu with all users link */}
        {/* <div className="dropdown navbar-user-menu">
          <img className="user-icon" />
          <div className="dropdown-content">
          // map navlinks
            <NavLink
              to="/users/:userid"
              activeClassName="active"
              className="navbar-user"
            />
          </div>
        </div> */}
      </div>
    );
  }
}
