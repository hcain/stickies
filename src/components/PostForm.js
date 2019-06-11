import React, { Component } from "react";
import { connect } from "react-redux";
import "./PostForm.scss";
import { addSticky } from "../actions/actions";

class PostForm extends Component {
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const content = this.getContent.value;
  //   const poster = this.getPoster.value;
  //   const sticky = {
  //     content,
  //     poster
  //   };
  //   console.log("add sticky component");
  //   this.props.dispatch(addSticky(sticky, this.props.id));

  //   this.getContent.value = "";
  //   this.getPoster.value = "";
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("The link was clicked.", this.content.value, this.poster.value);
    const content = this.content.value;
    const poster = this.poster.value;
    console.log("next.", content, poster);
    // if (!content.value.trim() || !poster.value.trim()) {
    //   return;
    // }
    const sticky = {
      content,
      poster
    };
    console.log("next next.", JSON.stringify(sticky));
    this.props.dispatch(addSticky(sticky, this.props.id));
    this.content.value = "";
    this.poster.value = "";
  };

  render() {
    // console.log("addSticky id", this.props.id);
    return (
      <div className="post-form aspectRatioSizer">
        <svg viewBox="0 0 1 1" />
        <div>
          <h1>Create Post</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              // ref="poster"
              ref={(input) => (this.content = input)}
              // value="poster"
              placeholder="Enter Post Title"
            />
            <br />
            <br />
            <textarea
              ref={(input) => (this.poster = input)}
              // ref="content"
              // value="content"
              required
              rows="5"
              cols="28"
              placeholder="Enter Post"
            />
            <br />
            <br />
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
