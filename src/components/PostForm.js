import React, { Component } from "react";
import { connect } from "react-redux";

import { addSticky } from "../actions/actions";
import "../sass/_postForm.scss";

class PostForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const content = this.content.value;
    const poster = this.poster.value;
    const sticky = {
      content,
      poster
    };
    this.props.dispatch(addSticky(sticky, this.props.id));
    this.content.value = "";
    this.poster.value = "";
  };

  render() {
    return (
      <div className="post-form aspectRatioSizer">
        {/* svg maintains square https://codeburst.io/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b*/}
        <svg viewBox="0 0 1 1" />
        <div className="input-section">
          <p>Write a sticky!</p>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              required
              type="text"
              className="message"
              ref={(input) => (this.content = input)}
              placeholder="message"
            />

            <input
              type="text"
              className="poster"
              ref={(input) => (this.poster = input)}
              placeholder="name"
            />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.items,
  loading: state.loading,
  error: state.message
});

export default connect(mapStateToProps)(PostForm);
