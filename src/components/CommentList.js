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
    const { id } = this.props.id;
    this.getCommentList(id);
  }

  getCommentList = () => {
    getAllComments(this.props.id).then(comments => {
      this.setState({ comments });
    });
  };

  deleteOneComment = id => {
    deleteComment(id).then(vastaus => {
      this.getCommentList();
    });
  };

  render() {
    const commentrows = this.state.comments
      .sort(function compare(a, b) {
        var dateA = new Date(a.c_posttime);
        var dateB = new Date(b.c_posttime);
        return dateB - dateA;
      })

      .map(input => {
        return <CommentItem input={input} delete={this.deleteOneComment} />;
      });

    return (
      <Container className="commentTable">
        <Row></Row>
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
            <CommentForm
              getCommentList={this.getCommentList}
              id="commentForm"
              id={this.props.id}
              onClick={() =>
                this.props.history.push(`/topics/${this.props.id}`)
              }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
