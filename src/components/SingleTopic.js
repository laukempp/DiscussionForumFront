//Yksittäinen Topic -näkymä
import React, { Component } from "react";
import { getSingleTopic } from "../service/request";
import { Table, Container, Row, Col } from "reactstrap";

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
    // let timed = new Date(this.state.topic.posttime).toLocaleDateString("fi-FI");
    // let time = new Date(this.state.topic.posttime).toLocaleTimeString("fi-FI");
    return (
      <div>
        <h1>Otsikko</h1>
        {this.state.topic != null ? (
          <Container className="topicTable">
            <Row>
              <Col>
                <h1 style={{ margin: "20px 0" }}>{this.state.topic.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>{this.state.topic.id}</th>
                      <th>{this.state.topic.nickname}</th>
                      <th>{this.state.topic.title}</th>
                      <th>
                        {new Date(this.state.topic.posttime).toLocaleDateString(
                          "fi-FI"
                        )}{" "}
                        {new Date(this.state.topic.posttime).toLocaleTimeString(
                          "fi-FI"
                        )}
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={4}>{this.state.topic.input}</td>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Container>
        ) : (
          <p>ladataan</p>
        )}
      </div>
    );
  }
}
