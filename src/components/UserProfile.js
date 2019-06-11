import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import UserPost from "./UserPost";
import PostForm from "./PostForm";
import NoPost from "./NoPost";
import Sticky404 from "./Sticky404";
import "../sass/_userProfile.scss";

class UserProfile extends Component {
  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="loading">Loading...</div>;
    }
    // get user index from url
    const user = users[this.props.match.params.id - 1];
    const posts = user ? user.posts : [];

    return (
      <div>
        {user ? (
          <div className="user-profile">
            {/* IF USER EXISTS DISPLAY USER COMPONENTS */}
            <UserCard {...user} />
            <PostForm {...user} />
            {posts.length ? (
              // IF USER HAS POST DISPLAY POSTS
              posts.map((post, index) => <UserPost key={index} {...post} />)
            ) : (
              // IF USER DOES NOT HAVE POSTS DISPLAY NOPOST COMPONENT
              <NoPost {...user} />
            )}
          </div>
        ) : (
          // IF USER DOES NOT EXIST DISPLAY 404
          <Sticky404 />
        )}
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
