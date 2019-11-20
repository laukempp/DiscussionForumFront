import React from "react";
import "./App.css";
import Navigation from "./layout/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopicForm from "./components/TopicForm";
import Home from "./components/Home";
import TopicList from "./components/TopicList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation title={"Koodifoorumi"} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/topics" exact component={TopicList}></Route>
          <Route path="/topicsform" component={TopicForm}></Route>
          {/* <Route path="/topics/:id" component={SingleTopic}></Route> */}
          {/* <Route component={NotFound}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
