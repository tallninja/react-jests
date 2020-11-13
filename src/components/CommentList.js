import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "actions";

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.fetchComments}>Fetch Comments</button>
        </div>
        <div>
          <ul>{this.renderComments()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

export default connect(mapStateToProps, actions)(CommentList);
