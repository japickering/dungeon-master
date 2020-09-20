import React, { Component } from "react";
import levels from "./data/levels";
import champions from "./data/champions";
import Controls from "./components/Controls";
import "./assets/styles/main.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      level: levels[0].id,
      activeLevel: 0,
      rotation: levels[0].rotation,
      position: levels[0].position,
      activeHero: 0,
      tooltipText: "",
    };
    this.moveChampions = this.moveChampions.bind(this);
    this.onHeroClick = this.onHeroClick.bind(this);
  }

  moveChampions(move) {
    const position = {
      x: this.state.position.x + move.x,
      y: this.state.position.y + move.y,
    };
    const level = levels[this.state.activeLevel];
    const xMax = level.cells[0].length - 1;
    const yMax = level.cells.length - 1;

    if (
      position.x < 0 ||
      position.y < 0 ||
      position.x > xMax ||
      position.y > yMax
    ) {
      return;
    }
    this.setState({ position: { x: position.x, y: position.y } });
  }

  onHeroClick(event, id) {
    event.preventDefault();
    this.setState({
      activeHero: id,
      tooltipText:
        champions[id].name +
        " " +
        champions[id].classType +
        " level " +
        champions[id].level,
    });
  }

  getAvatar(hero, isActive) {
    return (
      <div className={isActive ? "active" : ""}>
        <h3 className="hero-name">{hero.name}</h3>
        <img className="avatar" src={hero.image} alt="" />
        <div
          className="bar health"
          style={{ height: hero.params.health + "px" }}
        ></div>
        <div
          className="bar stamina"
          style={{ height: hero.params.stamina + "px" }}
        ></div>
        <div
          className="bar mana"
          style={{ height: hero.params.mana + "px" }}
        ></div>
      </div>
    );
  }

  hover(event, tile) {
    event.preventDefault();
    this.setState({ tooltipText: tile });
  }

  renderMap() {
    let arr = [];
    let count = 0;

    for (let rows = 0; rows < levels[0].cells.length; rows++) {
      const grid = levels[0].cells[rows];

      for (let cols = 0; cols < grid.length; cols++) {
        let type = grid[cols] === 0 ? "wall" : "floor";
        arr.push(
          <div
            key={count}
            onMouseEnter={(event) => this.hover(event, type)}
            className={
              grid[cols] === 0
                ? "wall " + "tile tile-" + count
                : "tile tile-" + count
            }
          >
            {this.state.position.y === rows &&
              this.state.position.x === cols &&
              type === "floor" && <div>C</div>}
          </div>
        );
        count++;
      }
    }
    return arr;
  }

  render() {
    return (
      <div className="container">
        <nav>
          <div className="tabs">
            {champions.map((hero) => {
              return (
                <div
                  key={hero.id}
                  className="tab"
                  onClick={(e) => this.onHeroClick(e, hero.id)}
                >
                  {this.state.activeHero === hero.id &&
                    this.getAvatar(hero, true)}
                  {this.state.activeHero !== hero.id &&
                    this.getAvatar(hero, false)}
                </div>
              );
            })}
            {/* <div className="party">
              <img src="images/party.png" alt="" />
            </div> */}
          </div>
        </nav>

        <div className="sidebar">
          <Controls moveChampions={this.moveChampions} />
        </div>

        <div className="map">{this.renderMap()}</div>

        <footer className="status">
          <h3>Map {this.state.level}</h3>
          <p>{this.state.tooltipText}</p>
        </footer>
      </div>
    );
  }
}
