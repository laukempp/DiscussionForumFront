//CommentItemit listattuna api/topics -routessa

import React, { Component } from "react";
import { getAllComments } from "../service/request";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import { Table, Button, Container, Row, Col } from "reactstrap";
import { deleteComment } from "../service/request";

export default class CommentList extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getCommentList(id);
  }

  getCommentList = () => {
    getAllComments(this.props.match.params.id).then(comments => {
      this.setState({ comments });
    });
  };

  deleteOneComment = id => {
    deleteComment(id).then(vastaus => {
      this.getCommentList();
    });
  };

  render() {
    const commentrows = this.state.comments.map(input => {
      return <CommentItem input={input} delete={this.deleteOneComment} />;
    });

    return (
      <Container className="commentTable">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>Tähän keskustelun aihe</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="success">Lisää uusi kommentti</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive hover>
              <thead>
                <tr>
                  {/* <th>Kommentin id</th> */}
                  <th>Nimimerkki</th>
                  <th>Kommentti</th>
                  <th>Postausaika</th>
                </tr>
              </thead>
              <tbody>{commentrows}</tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <CommentForm id="commentForm" id={this.props.match.params.id} />
          </Col>
        </Row>
      </Container>
    );
  }
}
