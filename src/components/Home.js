import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.scss";

import { fetchAllUsers } from "../actions/actions";
import UserCard from "./UserCard";

class Home extends Component {
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
      <div className="home">
        {users.map((user) => (
          <UserCard {...user} />
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

export default connect(mapStateToProps)(Home);
