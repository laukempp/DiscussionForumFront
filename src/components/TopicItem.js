// Nämä muodostavat TopicListin
import React, { Component } from "react";

export default class TopicItem extends Component {
  render() {
    const { id, nickname, title, comment, posttime } = this.props.topic;

    return (
      <tr key={id} onClick={() => this.props.history.push(`/topics/${id}`)}>
        <th scope="row">{id}</th>
        <td>{nickname}</td>
        <td>{title}</td>
        <td>{comment}</td>
        <td>{posttime}</td>
      </tr>
    );
  }
}
{
  /* <tr>
          <td>{id}</td>
          <td>{nickname}</td>
          <td>{title}</td>
          <td>{comment}</td>
          <td>{posttime}</td> */
}
{
  /* {id}, {nickname}, {title}, {comment},{" "}
        {posttime} */
}
