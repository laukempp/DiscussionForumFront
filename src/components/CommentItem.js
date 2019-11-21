import React, { Component } from "react";
import { Button } from "reactstrap";

export default class CommentItem extends Component {
  poistaKommentti = () => {
    this.props.delete(this.props.input.id);
  };
  render() {
    const { id, c_nickname, input, img, c_posttime } = this.props.input;

    let timed = new Date(c_posttime).toLocaleDateString("fi-FI");
    let time = new Date(c_posttime).toLocaleTimeString("fi-FI");

    return (
      <tr key={id}>
        {/* <th scope="row">{id}</th> */}
        <td>{c_nickname}</td>
        <td>{input}</td>
        <td>{img}</td>
        <td>
          {timed} {time}
        </td>
        <td>
          <div style={{ width: "110px" }}>
            <Button color="danger" onClick={this.poistaKommentti}>
              {" "}
              Poista
            </Button>
          </div>
        </td>
      </tr>
    );
  }
}
