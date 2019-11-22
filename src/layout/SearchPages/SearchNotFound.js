import React from "react";

const notfound = <img 
src="https://img.memecdn.com/keyboard-not-found_o_2227687.webp" 
style={{width: 400, position: 'absolute', top: '15%', right: 0, float: 'right'}}/>
export default class RouteNotFound extends React.Component {
  render() {
    let r = [];
    [...Array(1).keys()].forEach(i =>
      r.push(<div><h1 key={i}>Hakusi päätyi umpikujaan... Tauon paikka?</h1>{notfound}</div>)
    );
    return r;
  }
}