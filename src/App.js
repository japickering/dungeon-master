import React, { useState } from 'react';
import levels from './data/levels';
import champions from './data/champions';
// import Controls from './components/Controls';

const heroes = champions;

const App = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [rotation, setRotation] = useState(levels[0].rotation);
  const [position, setPosition] = useState(levels[0].position);
  const [level, setLevel] = useState(levels[0].id);
  const [activeChampion, setActiveChampion] = useState(0);

  function moveChampions(move) {
    const position = { x: position.x + move.x, y: position.y + move.y };
    const level = levels[activeLevel];
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
    setPosition(position);
  }

  function renderMap() {
    let arr = [];
    let count = 0;
    for (let i = 0; i < levels[0].cells.length; i++) {
      const grid = levels[0].cells[i];
      for (let j = 0; j < grid.length; j++) {
        arr.push(
          <div key={count} className={grid[j] === 0 ? 'wall ' + 'tile tile-' + count : 'tile tile-' + count}></div>
        );
        count++;
      }
    }
    return arr;
  }

  return (
    <div className='App'>
      <nav className='nav nav-bar'>
        <div className='tabs'>
          <div className='tab'>
            <img src='' alt='' className='avatar' />
            <h4>{heroes[0].name}</h4>
            <h4 className='health'>HP {heroes[0].params.health}</h4>
            <h4 className='stamina'>STA {heroes[0].params.stamina}</h4>
          </div>
          <div className='tab'>
            <img src='' alt='' className='avatar' />
            <h4>{heroes[1].name}</h4>
            <h4 className='health'>HP {heroes[1].params.health}</h4>
            <h4 className='stamina'>STA {heroes[1].params.stamina}</h4>
          </div>
          <div className='tab'>
            <img src='' alt='' className='avatar' />
            <h4>{heroes[2].name}</h4>
            <h4 className='health'>HP {heroes[2].params.health}</h4>
            <h4 className='stamina'>STA {heroes[2].params.stamina}</h4>
          </div>
          <div className='tab'>
            <img src='' alt='' className='avatar' />
            <h4>{heroes[3].name}</h4>
            <h4 className='health'>HP {heroes[3].params.health}</h4>
            <h4 className='stamina'>STA {heroes[3].params.stamina}</h4>
          </div>
        </div>
      </nav>
      <div className='map'>{renderMap()}</div>
      <div className='sidebar'></div>
      <footer className='status'>Level {level}</footer>
    </div>
  );
};

export default App;
