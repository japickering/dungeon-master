import React, { Component } from 'react';
import levels from './data/levels';
import champions from './data/champions';
import Controls from './components/Controls';
import './assets/styles/main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      level: levels[0].id,
      activeLevel: 0,
      rotation: levels[0].rotation,
      position: levels[0].position,
      activeHero: 0,
      tooltipText: '',
    };
    this.moveChampions = this.moveChampions.bind(this);
    this.onHeroClick = this.onHeroClick.bind(this);
  }

  moveChampions(move) {
    const position = { x: this.state.position.x + move.x, y: this.state.position.y + move.y };
    const level = levels[this.state.activeLevel];
    const xMax = level.cells[0].length - 1;
    const yMax = level.cells.length - 1;

    if (position.x < 0 || position.y < 0 || position.x > xMax || position.y > yMax) return;
    const cell = { x: position.x, y: position.y };
    this.setState({ position: cell });
  }

  onHeroClick(event, id) {
    event.preventDefault();
    this.setState({
      activeHero: id,
      tooltipText: champions[id].name + ' ' + champions[id].classType + ' level ' + champions[id].level,
    });
  }

  getAvatar(hero, isActive) {
    return (
      <div className={isActive ? 'active' : ''}>
        <h3 className='hero-name'>{hero.name}</h3>
        <img src={hero.image} className='avatar' alt='' />
        <h4>HP</h4>
        <h4 className='bar health' style={{ width: hero.params.health + 'px' }}>
          {hero.params.health}
        </h4>
        <h4>STA</h4>
        <h4 className='bar stamina' style={{ width: hero.params.stamina + 'px' }}>
          {hero.params.stamina}
        </h4>
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
    let championsOnTile = false;

    for (let i = 0; i < levels[0].cells.length; i++) {
      const grid = levels[0].cells[i];

      for (let j = 0; j < grid.length; j++) {
        let type = grid[j] === 0 ? 'wall' : 'floor';

        if (this.state.position.y === j && type === 'floor') {
          championsOnTile = true;
        } else {
          championsOnTile = false;
        }
        arr.push(
          <div
            key={count}
            onMouseEnter={(event) => this.hover(event, type)}
            className={grid[j] === 0 ? 'wall ' + 'tile tile-' + count : 'tile tile-' + count}>
            {championsOnTile && <div>C</div>}
          </div>
        );
        count++;
      }
    }
    return arr;
  }

  render() {
    return (
      <div className='container'>
        <nav className='nav nav-bar'>
          <div className='tabs'>
            {champions.map((hero) => {
              return (
                <div key={hero.id} className='tab' onClick={(e) => this.onHeroClick(e, hero.id)}>
                  {this.state.activeHero === hero.id && this.getAvatar(hero, true)}
                  {this.state.activeHero !== hero.id && this.getAvatar(hero, false)}
                </div>
              );
            })}
          </div>
        </nav>
        <div className='sidebar'>
          <Controls moveChampions={this.moveChampions} />
        </div>
        <div className='map'>{this.renderMap()}</div>
        <footer className='status'>
          <h3>Map {this.state.level}</h3>
          <p>{this.state.tooltipText}</p>
        </footer>
      </div>
    );
  }
}
