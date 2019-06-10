import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.scss";

import { fetchAllUsers } from "../actions/actions";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
    console.log(this.state);
  }

  render() {
    const { error, loading, users } = this.props;
    console.log(users);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="main">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.allUsersReducer.items,
  loading: state.allUsersReducer.loading,
  error: state.allUsersReducer.error
});

export default connect(mapStateToProps)(Main);
