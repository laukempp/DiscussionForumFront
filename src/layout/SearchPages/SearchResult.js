import React from "react";
 import {getAllTopics} from "../../service/request";
import SearchNotFound from './SearchNotFound';
export default class SearchResult extends React.Component {
    state = {
        isLoading: true,
        searchText: "",
        searchResults: []
    };

    handleSearch = () => {
        let searchText = this.props.location.state.searchText;
        
        getAllTopics().then(data=>{
            let results=data.filter(item => item.title.includes(searchText))
            this.setState({
                isLoading: false,
                searchText: searchText,
                searchResults: results
            });
            });
    };

    componentDidMount() {
        this.handleSearch();
    }

    componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.searchText;
        let newSearch = this.props.location.state.searchText;
        if (prevSearch !== newSearch) {
            this.handleSearch();
        }
    }

    render() {
        let toRender = this.state.isLoading ? (
            <h1>Lataa...</h1>
        ) : (
            <>
                <h1>Hakutulos</h1>
                <ul>
                    <li>Hakusana: "{this.state.searchText}"</li>
                    <li>Osumia: {this.state.searchResults.length}</li>
                </ul>
                {this.state.searchResults.length > 0 ? (
                    
                    <pre>
                        <small>{test = JSON.parse(this.state.searchResults, null, 2)}{test.title}</small>
                    </pre>
                ) : (
                    <SearchNotFound />
                )}
            </>
        );

        return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
    }
}