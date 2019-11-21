//CommentItemit listattuna api/topics -routessa

import React, { Component } from "react";
import { getAllComments } from "../service/request";
import CommentItem from "./CommentItem";
import { Table, Button, Container, Row, Col } from "reactstrap";

export default class CommentList extends Component {
state = {
    comments: []
};
componentDidMount() {
    this.getCommentList();
}

getCommentList = () => {
    getAllComments().then(comments => {
    this.setState({ comments });
    });
};

render() {
    const commentrows = this.state.comments.map(input => {
    return <CommentItem input={input} />;
    });

    return (
    <Container className="commentTable">
        <Row>
        <Col>
            <h1 style={{ margin: "20px 0" }}>Keskustelun kommentit</h1>
        </Col>
        </Row>
        <Row>
        <Col>
            <Button color="success">Uusi kommentti</Button>
        </Col>
        </Row>
        <Row>
        <Col>
            <Table responsive hover>
            <thead>
                <tr>
                <th>Kommentin id</th>
                <th>Nimimerkki</th>
                <th>Kommentti</th>
                <th>Postausaika</th>
                </tr>
            </thead>
            <tbody>{commentrows}</tbody>
            </Table>
        </Col>
        </Row>
    </Container>
    );
}
}