import React, { Component } from 'react';
import { Button } from "reactstrap";

export default class CommentItem extends Component {
render() {
    const { id, c_nickname, input, img, posttime } = this.props.input;
    let time = new Date(posttime).toLocaleTimeString('fi-FI')
    return (
    <tr key={id}>
        <th scope="row">{id}</th>
        <td>{c_nickname}</td>
        <td>{input}</td>
        <td>{img}</td>
        <td>{time}</td>
        <td>
        <div style={{ width: "110px" }}>
            <Button color="danger"> Poista</Button>
        </div>
        </td>
    </tr>
    );
}
}
