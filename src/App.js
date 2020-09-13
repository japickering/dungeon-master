import React, { useState, useEffect } from 'react';
import levels from './data/levels';
import champions from './data/champions';
import Controls from './components/Controls';

const heroes = champions;

const styles = {
  tooltip: {
    display: 'block',
    position: 'relative',
    width: '300px',
    height: '300px',
    border: '1px solid whitesmoke',
    backgroundColor: '#234',
  },
  tooltipInner: {
    margin: '0 auto',
    width: '50%',
    textAlign: 'center',
    color: '#DEF',
    fontSize: 13,
  },
};

// const directions = [
//   { name: 'north', move: { x: 0, y: -1 }, rotate: 0 },
//   { name: 'east', move: { x: 1, y: 0 }, rotate: 1 },
//   { name: 'south', move: { x: 0, y: 1 }, rotate: 2 },
//   { name: 'west', move: { x: -1, y: 0 }, rotate: 3 },
// ];

const App = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [rotation, setRotation] = useState(levels[0].rotation);
  const [position, setPosition] = useState(levels[0].position);
  const [level, setLevel] = useState(levels[0].id);
  const [activeHero, setActiveHero] = useState(0);
  const [tooltipText, setTooltipText] = useState('');

  function moveChampions(move) {
    const pos = { x: position.x + move.x, y: position.y + move.y };
    const level = levels[activeLevel];
    const xMax = level.cells[0].length - 1;
    const yMax = level.cells.length - 1;

    if (pos.x < 0 || pos.y < 0 || pos.x > xMax || pos.y > yMax) return;
    const cell = level.cells[pos.y][pos.x];
    switch (cell) {
      case 0:
        return;
      case 1:
      case 2:
        break;
      default:
    }
    setPosition(position);
  }

  function rotateChampions(direction) {
    setRotation(rotation);
  }

  function moveNorth() {
    moveChampions({ x: 0, y: -1 });
  }

  function moveSouth() {
    moveChampions({ x: 0, y: 1 });
  }

  function moveWest() {
    moveChampions({ x: -1, y: 0 });
  }

  function moveEast() {
    moveChampions({ x: 1, y: 0 });
  }

  function onHeroClick(event, id) {
    event.preventDefault();
    setActiveHero(id);
    setTooltipText(heroes[id].name + ' ' + heroes[id].classType + ' level ' + heroes[id].level);
  }

  function hover(event, tile) {
    event.preventDefault();
    setTooltipText(tile);
  }

  function renderMap() {
    let arr = [];
    let count = 0;
    for (let i = 0; i < levels[0].cells.length; i++) {
      const grid = levels[0].cells[i];
      for (let j = 0; j < grid.length; j++) {
        let type = grid[j] === 0 ? 'wall ' + 'tile-' + count : 'floor tile-' + count;
        arr.push(
          <div
            key={count}
            onMouseEnter={(event) => hover(event, type)}
            className={grid[j] === 0 ? 'wall ' + 'tile tile-' + count : 'tile tile-' + count}></div>
        );
        count++;
      }
    }
    return arr;
  }

  function getAvatar(hero, isActive) {
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

  return (
    <div className='container'>
      <nav className='nav nav-bar'>
        <div className='tabs'>
          {heroes.map((hero) => {
            return (
              <div key={hero.id} className='tab' onClick={(e) => onHeroClick(e, hero.id)}>
                {activeHero === hero.id && getAvatar(hero, true)}
                {activeHero !== hero.id && getAvatar(hero, false)}
              </div>
            );
          })}
        </div>
      </nav>
      <div className='sidebar'>
        <Controls rotation={rotation} moveChampions={moveChampions} />
      </div>
      {/* <div className='tooltip' style={styles.tooltip}>
        <div className='center' style={styles.tooltipInner}>
          {tooltipText}
        </div>
      </div> */}
      <div className='map'>{renderMap()}</div>
      <footer className='status'>
        <h3>Map {level}</h3>
        <p>{tooltipText}</p>
      </footer>
    </div>
  );
};

export default App;
