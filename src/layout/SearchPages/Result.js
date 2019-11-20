import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        let timed = new Date(this.props.data.posttime).toLocaleDateString('fi-FI');
        let time = new Date(this.props.data.posttime).toLocaleTimeString('fi-FI');

        return (
            <tr className="result">
                <td>{this.props.data.title}</td>
                <td>{this.props.data.nickname}</td>
                <td>{timed} {time}</td>
            </tr>
        )
    }
}
