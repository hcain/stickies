import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.scss";

import { firstAction, secondAction } from "../actions/actions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.firstAction = this.firstAction.bind(this);
    this.secondAction = this.secondAction.bind(this);
  }

  firstAction() {
    this.props.firstAction();
  }

  secondAction() {
    this.props.secondAction();
  }

  render() {
    return (
      <div className="main">
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.firstAction}>First action</button>
        <button onClick={this.secondAction}>Second action</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  firstAction: () => dispatch(firstAction()),
  secondAction: () => dispatch(secondAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
