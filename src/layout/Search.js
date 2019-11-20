import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";


import {Form, FormControl, Button } from "react-bootstrap";

class Search extends React.Component {
    state = {
        searchText: ""
    };

    handleRoute = route => () => {
        this.props.history.push({ pathname: route });
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            this.props.history.push({
                pathname: "/results",
                state: { searchText: text }
            });
        } else {
            alert("Hakukenttä on tyhjä!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
    }

    handleFormSubmit = e => e.preventDefault();

    render() {
        return (
            <>
                
                    <Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            onKeyUp={this.handleSearchKeyUp}
                            type="text"
                            placeholder="Etsi"
                            className="mr-sm-2"
                        />
                        <Button onClick={this.handleSearchSubmit} variant="info">
                            Etsi
                        </Button>
                    </Form>
                
                
            </>
        );
    }
}

export default withRouter(Search);