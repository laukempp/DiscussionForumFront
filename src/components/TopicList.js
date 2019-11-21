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
    const topicrows = this.state.topics
      .sort(function compare(a, b) {
        var dateA = new Date(a.posttime);
        var dateB = new Date(b.posttime);
        return dateB - dateA;
      })
      .map(topic => {
        return <TopicItem topic={topic} {...this.props} />;
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
                  <th>Keskustelun id</th>
                  <th>Nimimerkki</th>
                  <th>Otsikko</th>
                  <th>Postausaika</th>
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
