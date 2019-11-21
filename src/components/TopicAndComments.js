import React, { Component } from "react";
import SingleTopic from "./SingleTopic";
import CommentList from "./CommentList";

export default class TopicAndComments extends Component {
  render() {
    return (
      <div>
        <SingleTopic id={this.props.match.params.id} />
        <CommentList id={this.props.match.params.id} />
      </div>
    );
  }
}
