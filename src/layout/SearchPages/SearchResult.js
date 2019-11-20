import React from "react";
 import {getAllTopics} from "../../service/request";
import SearchNotFound from './SearchNotFound';
import ResultList from './ResultList';
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
example () {
    this.setState({result: getAllTopics});
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
                {console.dir(this.state.searchResults)}
                {this.state.searchResults.length > 0 ? (
                    
                    <div>
                       <ResultList result={this.state.searchResults} />
                    </div>
                ) : (
                    <SearchNotFound />
                )}
            </>
        );

        return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
    }
}