import React from "react";
import "./App.css";
import Navigation from "./layout/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopicForm from "./components/TopicForm";
import Home from "./components/Home";
import TopicList from "./components/TopicList";
import TopicAndComments from "./components/TopicAndComments";
import NotFound from './components/NotFound';
import SearchResult from './layout/SearchPages/SearchResult';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation title={"Tietotulva"} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/topics" exact component={TopicList}></Route>
          <Route path="/topicsform" component={TopicForm}></Route>
          <Route path="/topics/:id" component={TopicAndComments}></Route>
          {/* <Route path="/topics/:id" component={SingleTopic}></Route> */}
          <Route path='/results' component={SearchResult}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
