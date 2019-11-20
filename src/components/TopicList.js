//TopicItemit listattuna api/topics -routessa

import React, { Component } from "react";
import { getAllTopics } from "../service/request";
import TopicItem from "./TopicItem";
import { Table, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class TopicList extends Component {
  state = {
    topics: [],
    loading: true
  };
  componentDidMount() {
    this.getTopicList();
  }

  getTopicList = () => {
    getAllTopics().then(topics => {
      this.setState({ topics, loading: false });
    });
  };

  render() {
    const topicrows = this.state.topics.map(topic => {
      return <TopicItem topic={topic} />;
    });

    return (
      <Container className="topicTable">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>Keskustelut</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={"/topicsform"}>
              <Button color="success">Uusi keskustelu</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Post id</th>
                  <th>nickname</th>
                  <th>title</th>
                  <th>comment</th>
                  <th>posttime</th>
                </tr>
              </thead>
              <tbody>{topicrows}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
