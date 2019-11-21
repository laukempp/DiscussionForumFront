//Yksittäinen Topic -näkymä
import React, { Component } from "react";
import { getSingleTopic } from "../service/request";
import { Table } from "reactstrap";

export default class SingleTopic extends Component {
  state = {
    topic: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getSingleTopic(id).then(topic => {
      this.setState({ topic });
    });
  }

  render() {
    return (
      <div>
        <h1>Otsikko</h1>
        {this.state.topic != null ? (
          <Table>
            <th>{this.state.topic.id}</th>
            <th>{this.state.topic.nickname}</th>
            <th>{this.state.topic.title}</th>
            <th>{this.state.topic.posttime}</th>
          </Table>
        ) : (
          <p>ladataan</p>
        )}
      </div>
    );
  }
}
