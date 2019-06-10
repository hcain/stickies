import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="site-name">Stickies</h1>
        <NavLink to="/" activeClassName="active" className="navbar-home">
          <img className="home-icon" />
        </NavLink>
        <div className="dropdown navbar-user-menu">
          <img
            className="user-icon"
            // onClick={}
          />
          <div className="dropdown-content">
            <NavLink
              to="/user/:userid"
              activeClassName="active"
              className="navbar-user"
            />
          </div>
        </div>
      </div>
    );
  }
}
