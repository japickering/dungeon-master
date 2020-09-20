import React, { Component } from "react";

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
      <div className="controls">
        <div className="control-blank"></div>
        <div className="control" onClick={this.moveNorth}>
          <i class="fa fa-chevron-up"></i>
        </div>
        <div className="control-blank"></div>
        <div className="control" onClick={this.moveWest}>
          <i class="fa fa-chevron-left"></i>
        </div>
        <div className="control" onClick={this.moveSouth}>
          <i class="fa fa-chevron-down"></i>
        </div>
        <div className="control" onClick={this.moveEast}>
          <i class="fa fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
