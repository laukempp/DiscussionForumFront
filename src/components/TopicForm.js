//Formi uuden Topicin luomiseen.
import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { postTopic } from '../service/request.js';

class TopicForm extends Component {
state = {title: '', nickname: '', input: ''}

//Get input values
handleTitleChange = (e) => {this.setState({title: e.target.value});}
handleNicknameChange = (e) => {this.setState({nickname: e.target.value});}
handleInputChange = (e) => {this.setState({input: e.target.value});}

//Handle button function
handleCreateClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    postTopic(this.state)
        .then(res => {
            this.setState({title: '', nickname: '', input:''});
        })
        .then(console.log("Topic lisätty onnistuneesti."));
}

    render() {
        return (
            <Container className="formContainer">
            <h2>Aloita uusi keskustelu</h2>
            <Form className="form">
            <Form.Group>
                <Form.Label htmlFor="form_title">Otsikko</Form.Label>
                <Form.Control size="sm" type="text" placeholder="Otsikko" id="form_title" value={this.state.title} onChange={this.handleTitleChange} required="required"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="form_nickname">Nimimerkki</Form.Label>
                <Form.Control size="sm" type="text" placeholder="Nimimerkki" id="form_nickname" value={this.state.nickname} onChange={this.handleNicknameChange} required="required"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="form_input">Viesti</Form.Label>
                <Form.Control as="textarea" placeholder="Kirjoita viestisi tähän..." rows="3" id="form_input" value={this.state.input} onChange={this.handleInputChange}></Form.Control>
            </Form.Group>
            <Button variant="outline-info" type="submit" onClick={this.handleCreateClick}>Lisää</Button>
            </Form>
            </Container>
        )
    }
}
export default TopicForm;