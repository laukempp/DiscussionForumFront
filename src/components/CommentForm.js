//Formi uuden kommentin luomiseen.
import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { postComment } from "../service/request.js";

class CommentForm extends Component {
  state = { c_nickname: "", input: "", img: "" };

  //Get input values
  handleNicknameChange = e => {
    this.setState({ c_nickname: e.target.value });
  };
  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };
  handleImageChange = e => {
    this.setState({ img: e.target.value });
  };

  //Handle button function
  handleCreateClick = e => {
    e.preventDefault();
    console.log(this.state);
    postComment(this.props.id, this.state)
      .then(res => {
        this.setState({ c_nickname: "", input: "" });
      })
      .then(this.props.getCommentList)

      .then(console.log("Kommentti lisätty onnistuneesti."));
  };

  render() {
    return (
      <Container className="formContainer">
        <h3>Lisää uusi kommentti</h3>
        <Form className="form">
          <Form.Group>
            <Form.Label htmlFor="form_nickname">Nimimerkki</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Nimimerkki"
              id="form_nickname"
              value={this.state.c_nickname}
              onChange={this.handleNicknameChange}
              required="required"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="form_input">Viesti</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Kirjoita viestisi tähän..."
              rows="3"
              id="form_input"
              value={this.state.input}
              onChange={this.handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Button
            variant="outline-info"
            type="submit"
            onClick={this.handleCreateClick}
          >
            Lisää
          </Button>
        </Form>
      </Container>
    );
  }
}
export default CommentForm;
