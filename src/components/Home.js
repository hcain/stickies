import React, { Component } from "react";
import { connect } from "react-redux";
import "../sass/_home.scss";

import UserCard from "./UserCard";

class Home extends Component {
  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return (
        <div className="error">
          <p> Oops! {error.message}!</p>
          <p>Go back the way you came!</p>
        </div>
      );
    }

    if (loading) {
      return <div className="loading">loading</div>;
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
