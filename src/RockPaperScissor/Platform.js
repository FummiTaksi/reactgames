import React, { Component } from 'react';
import Square from './Square.js';


class Platform extends React.Component {

  renderSquare(i) {
    return <Square value={i}
            onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
  return (
    <div className = "platform">
    <h1>Play rock-paper-scissors</h1>
    {this.renderSquare("ROCK")}
    {this.renderSquare("PAPER")}
    {this.renderSquare("SCISSORS")}
    </div>
  )
 }

}


export default Platform;
