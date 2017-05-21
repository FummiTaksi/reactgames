import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTestUtils from 'react-dom/test-utils';
import Game from './TicTacToe/Game.js';
import RockPaperScissor from './RockPaperScissor/RockPaperScissor.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      game: "",
      component: "",
    };
}
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Games</h2>
        </div>
        <div className="App-intro">
        <a href="" onClick={(event) => this.handleGame("Tic Tac Toe", event)}>
        Tic Tac Toe
        </a>
        <br></br>
        <a href="" onClick={(event) => this.handleGame("Rock Paper Scissors", event)}>
        Rock Paper Scissor
        </a>
        {this.state.game == "Rock Paper Scissors" && <RockPaperScissor />}
        {this.state.game == "Tic Tac Toe" && <Game />}


        </div>

      </div>



    );
  }

  handleGame(name, event) {
    event.preventDefault();

    this.setState({game: name})
    if (name === "Tic Tac Toe") {
      this.state.component = "Game";
    }
    if (name === "Rock Papere Scissors") {
      this.state.component = "RockPaperScissor";
    }
  }
}

export default App;
