import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserProfile.scss";
import UserCard from "./UserCard";
import UserPost from "./UserPost";

class UserProfile extends Component {
  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    const user = users[this.props.match.params.id - 1];
    console.log(user);
    const posts = user ? user.posts : [];
    return (
      <div className="user-profile">
        <UserCard {...user} />
        {posts.map((post) => (
          <UserPost {...post} />
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

export default connect(mapStateToProps)(UserProfile);
