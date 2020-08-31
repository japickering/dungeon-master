import React, { Component } from 'react';
import Store from '../store';
import Control from './Control';

const directions = [
  { name: 'north', move: { x: 0, y: -1 }, rotate: 0 },
  { name: 'east', move: { x: 1, y: 0 }, rotate: 1 },
  { name: 'south', move: { x: 0, y: 1 }, rotate: 2 },
  { name: 'west', move: { x: -1, y: 0 }, rotate: 3 },
];

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this);
    this.turn = this.turn.bind(this);
  }

  move(direction) {
    Store.moveChampions({ move: directions[direction.value].move });
  }

  turn(direction, init) {
    switch (direction.value) {
      case -1:
        directions.unshift(directions.pop());
        break;
      case 1:
        directions.push(directions.shift());
        break;
    }
    if (init === undefined) {
      Store.rotateChampions({ rotation: directions[0].rotate });
    }
  }

  created() {
    let turns = 0;
    while (turns < directions.length && directions[0].rotate !== Store.state.rotation) {
      this.turn({ value: 1 }, true);
      ++turns;
    }
  }

  render() {
    return (
      <div class='controls'>
        <Control type='turn' turn={this.turn} direction={{ name: 'left', value: -1 }} />
        <Control type='move' move={this.move} direction={{ name: 'up', value: 0 }} />
        <Control type='turn' turn={this.turn} direction={{ name: 'right', value: 1 }} />
        <Control type='move' move={this.move} direction={{ name: 'left', value: 3 }} />
        <Control type='move' move={this.move} direction={{ name: 'down', value: 2 }} />
        <Control type='move' move={this.move} direction={{ name: 'right', value: 1 }} />
      </div>
    );
  }
}
