import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Sticky404 from "./components/Sticky404";
import Footer from "./components/Footer";

import { fetchAllUsers } from "./actions/actions";
import "./sass/_app.scss";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="wrapper">
            <Navbar />
            <div className="content">
              <ScrollToTop>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/users/:id" component={UserProfile} />
                  <Route path="*" component={Sticky404} />
                </Switch>
              </ScrollToTop>
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
