import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import SearchNotFound from "./SearchPages/SearchNotFound";
import SearchResult from "./SearchPages/SearchResult";

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
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button onClick={this.handleSearchSubmit} variant="outline-info">
                            Etsi
                        </Button>
                    </Form>
                
                <Switch>
                    
                    <Route exact path="/results" component={SearchResult} />
                    <Route path ="/404" component={SearchNotFound} />
                </Switch>
            </>
        );
    }
}

export default withRouter(Search);