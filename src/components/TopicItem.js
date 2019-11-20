// Nämä muodostavat TopicListin
import React, { Component } from "react";
import { Button } from "reactstrap";

export default class TopicItem extends Component {
  render() {
    const { id, nickname, title, posttime } = this.props.topic;
    
    let timed = new Date(posttime).toLocaleDateString('fi-FI');
    let time = new Date(posttime).toLocaleTimeString('fi-FI');

    return (
      <tr key={id}>
        <th scope="row">{id}</th>
        <td>{nickname}</td>
        <td>{title}</td>
        <td>{timed} {time}</td>
        <td>
          <div style={{ width: "110px" }}>
            <Button color="danger"> Poista</Button>
          </div>
        </td>
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
