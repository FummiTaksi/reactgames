import React, { Component } from 'react';
import Platform from './Platform.js';

class RockPaperScissor extends React.Component {


  constructor() {
    super();
    this.state = {
      playerPoints: 0,
      AIPoints: 0,
      AIMove: "",
      score: "You vs. AI 0 - 0",
      round: "No rounds played.",
    };
}

  changeAIMove(newMove) {
    this.setState ({
      AIMove: newMove,
    });
  }

  playerWinsPoint(points) {
    this.setState ({
      playerPoints: points + 1,
    });
  }


  AIWinsPoint(points) {
    this.setState ({
      AIPoints: points + 1,
    });
  }



  handleClick(i) {
    console.log("nappia painettiin");
   const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   const AIMove = "";
   if (random === 1) {
     this.state.AIMove = "ROCK"
     if (i === "PAPER") {
       this.state.playerPoints += 1;
     }
     if (i === "SCISSORS") {
       this.state.AIPoints += 1;
     }
   }
   if (random === 2) {
     this.state.AIMove = "PAPER";
     if (i === "SCISSORS") {
       this.state.playerPoints += 1;
     }
     if (i === "ROCK") {
       this.state.AIPoints += 1;
     }

   }
   if (random === 3) {
     this.state.AIMove = "SCISSOR";
     if (i === "ROCK") {
       this.state.playerPoints += 1;
     }
     if (i === "PAPER") {
       this.state.AIPoints += 1;
     }
   }
   this.setState ({
     round: 'You selected ' + i + ', AI selected ' + this.state.AIMove,
     score: 'You vs AI ' + this.state.playerPoints + ' - ' + this.state.AIPoints,
   });
  }

  render() {
  return (
       <div className="rockpaperscissor">
       <Platform
        onClick={(i) => this.handleClick(i)}
       />
       <h2>{this.state.score}</h2>
       <br></br>
       <h3>{this.state.round}</h3>
       </div>
  )
 }
}

export default RockPaperScissor;
