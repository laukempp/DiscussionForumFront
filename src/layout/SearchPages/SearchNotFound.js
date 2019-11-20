import React from "react";

export default class RouteNotFound extends React.Component {
  render() {
    let r = [];
    [...Array(1).keys()].forEach(i =>
      r.push(<h1 key={i}>Hakusi päätyi umpikujaan... Tauon paikka?</h1>)
    );
    return r;
  }
}