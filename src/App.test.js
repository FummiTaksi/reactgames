import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './TicTacToe/Game.js'
import Platform from './RockPaperScissor/Platform.js'

var TestUtils = require('react-dom/test-utils');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("Platform renders correct h1", function () {
    var component = TestUtils.renderIntoDocument(
        < Platform/>
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

    expect(ReactDOM.findDOMNode(h1).textContent)
        .toEqual("Play rock-paper-scissors");
});

it ("Game renders correct status at start", function () {
    var component = TestUtils.renderIntoDocument(
        < Game/>
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1'
    );

    expect(ReactDOM.findDOMNode(h1).textContent)
        .toEqual("Next player: X");

});
