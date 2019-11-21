import React, { Component } from 'react';
import { Button } from "reactstrap";

export default class CommentItem extends Component {
render() {
    const { id, c_nickname, input, img, c_posttime } = this.props.input;

    let optiot: {hour: '2-digit', minute:'2-digit'}
    let timed = new Date(c_posttime).toLocaleDateString('fi-FI', optiot);
    let time = new Date(c_posttime).toLocaleTimeString('fi-FI', optiot);

    return (
    <tr key={id}>
        {/* <th scope="row">{id}</th> */}
        <td>{c_nickname}</td>
        <td>{input}</td>
        <td>{img}</td>
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
