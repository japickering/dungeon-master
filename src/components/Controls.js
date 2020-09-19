import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.moveNorth = this.moveNorth.bind(this);
    this.moveSouth = this.moveSouth.bind(this);
    this.moveWest = this.moveWest.bind(this);
    this.moveEast = this.moveEast.bind(this);
  }

  moveNorth() {
    this.props.moveChampions({ x: 0, y: -1 });
  }

  moveSouth() {
    this.props.moveChampions({ x: 0, y: 1 });
  }

  moveWest() {
    this.props.moveChampions({ x: -1, y: 0 });
  }

  moveEast() {
    this.props.moveChampions({ x: 1, y: 0 });
  }

  render() {
    return (
      <div className='controls'>
        <div>
          <div className='control' onClick={this.moveNorth}>
            Up
          </div>
          <div className='control' onClick={this.moveSouth}>
            Down
          </div>
        </div>
      </div>
    );
  }
}
