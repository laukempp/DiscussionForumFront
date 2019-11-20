import React, { Component } from 'react'
import SearchResult from './SearchPages/SearchResult';
import SearchNotFound from './SearchPages/SearchNotFound';
import { Route, Switch, withRouter } from "react-router-dom";

export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <Switch>
                    
                    <Route exact path="/results" component={SearchResult} />
                    <Route path ="/404" component={SearchNotFound} />
                </Switch>
            </div>
        )
    }
}
