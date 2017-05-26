import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './TicTacToe/Game.js'
import Board from './TicTacToe/Board.js'
import Platform from './RockPaperScissor/Platform.js'
import RockPaperScissor from './RockPaperScissor/RockPaperScissor.js'

var TestUtils = require('react-dom/test-utils');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});



it("Rock paper scissors Platform renders correct h1", function () {
    var component = TestUtils.renderIntoDocument(
        < Platform/>
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

    expect(ReactDOM.findDOMNode(h1).textContent)
        .toEqual("Play rock-paper-scissors");
});

it("Shows right score when no rounds played", function() {
  var component = TestUtils.renderIntoDocument(
      < RockPaperScissor/>
  );

  var h2 = TestUtils.findRenderedDOMComponentWithTag(
    component, 'h2'
  );


  expect(ReactDOM.findDOMNode(h2).textContent)
      .toEqual("You vs. AI 0 - 0");

});

it("Shows right amounts of round played at start", function() {
  var component = TestUtils.renderIntoDocument(
      < RockPaperScissor/>
  );

  var h3 = TestUtils.findRenderedDOMComponentWithTag(
    component, 'h3'
  );


  expect(ReactDOM.findDOMNode(h3).textContent)
      .toEqual("No rounds played.");
});

it("Shows correctly chosen element", function() {
  var component = TestUtils.renderIntoDocument(
      < RockPaperScissor/>
  );

  component.handleClick("ROCK");

  var h3 = TestUtils.findRenderedDOMComponentWithTag(
    component, 'h3'
  );

  expect(ReactDOM.findDOMNode(h3).textContent)
      .toContain("You selected ROCK");
});

it ("TicTacToe renders correct status at start", function () {
    var component = TestUtils.renderIntoDocument(
        < Game/>
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1'
    );

    expect(ReactDOM.findDOMNode(h1).textContent)
        .toEqual("Next player: X");

});

it ("TicTacToe shows 0:s turn after first move", function() {
  var component = TestUtils.renderIntoDocument(
      < Game/>
  );

  component.handleClick(1);

  var h1 = TestUtils.findRenderedDOMComponentWithTag(
    component, 'h1'
  );

  expect(ReactDOM.findDOMNode(h1).textContent)
      .toEqual("Next player: O");


});

it ("Shows right winner", function () {
  var component = TestUtils.renderIntoDocument(
      < Game/>
  );

  component.handleClick(0);
  component.handleClick(3);
  component.handleClick(1);
  component.handleClick(4);
  component.handleClick(2);

  var h1 = TestUtils.findRenderedDOMComponentWithTag(
    component, 'h1'
  );

  expect(ReactDOM.findDOMNode(h1).textContent)
      .toEqual("Winner: X");
});
