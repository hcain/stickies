import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserProfile.scss";
import UserCard from "./UserCard";
import UserPost from "./UserPost";
import PostForm from "./PostForm";

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
    // console.log(user);
    const posts = user ? user.posts : [];
    // console.log("posts", posts);

    return (
      <div className="user-profile">
        <UserCard {...user} />
        <PostForm {...user} />
        {posts.map((post, index) => (
          <UserPost key={index} {...post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(UserProfile);
