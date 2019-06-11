import React, { Component } from "react";
import { connect } from "react-redux";
import "../sass/_home.scss";

import UserCard from "./UserCard";

class Home extends Component {
  render() {
    const { error, loading, users } = this.props;
    console.log("home", loading);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="home">
        {users && users.map((user) => <UserCard key={user.id} {...user} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(Home);
