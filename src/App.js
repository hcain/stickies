import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

import { fetchAllUsers } from "./actions/actions";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }

  render() {
    // console.log("app render", this.props);
    return (
      <div className="App">
        <Router>
          <div className="wrapper">
            <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users/:id" component={UserProfile} />
                {/* <Route path="*" component={Page404} /> */}
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.items,
  loading: state.loading,
  error: state.message
});

export default connect(mapStateToProps)(App);
