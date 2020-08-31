import React, { Component } from 'react';
import { levels, champions } from '../data';

export default class Store extends Component {
  state = {
    levels,
    champions: [],
    activeLevelIndex: 0,
    activeChampionIndex: 0,
    position: levels[0].position,
    rotation: levels[0].rotation,
  };

  addChampion() {
    if (state.champions.length === 4) return;
    let tmp = this.state.champions;
    tmp.push(champions[index]);
    this.setState({ champions: tmp });
  }

  rotateChampions(rotation) {
    this.setState({ rotation: rotation });
  }

  setActiveChampionIndex(index) {
    this.setState({ activeChampionIndex: index });
  }

  moveChampions(move) {
    const position = { x: this.state.position.x + move.x, y: this.state.position.y + move.y };
    const level = levels[this.state.activeLevelIndex];
    const xMax = level.cells[0].length - 1;
    const yMax = level.cells.length - 1;

    if (position.x < 0 || position.y < 0 || position.x > xMax || position.y > yMax) return;
    const cell = level.cells[position.y][position.x];
    switch (cell) {
      case 0:
        return;
      case 1:
      case 2:
        break;
      default:
    }
    this.setState({ position: position });
  }
}
