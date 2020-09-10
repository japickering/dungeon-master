import React, { useState, useEffect } from 'react';
import levels from './data/levels';
import champions from './data/champions';
// import Controls from './components/Controls';

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

const App = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [rotation, setRotation] = useState(levels[0].rotation);
  const [position, setPosition] = useState(levels[0].position);
  const [level, setLevel] = useState(levels[0].id);
  const [activeHero, setActiveHero] = useState(0);
  const [tooltipText, setTooltipText] = useState('');

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

  function onHeroClick(event, id) {
    event.preventDefault();
    setActiveHero(id);
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

  return (
    <div className='App'>
      <nav className='nav nav-bar'>
        <div className='tabs'>
          {activeHero === 0 && (
            <div className='tab active' onClick={(e) => onHeroClick(e, 0)}>
              <img src='/images/BG_16_m.png' className='avatar' alt='' />
              <h4>{heroes[0].name}</h4>
              <h4 className='health'>HP {heroes[0].params.health}</h4>
              <h4 className='stamina'>STA {heroes[0].params.stamina}</h4>
            </div>
          )}
          {activeHero !== 0 && (
            <div className='tab' onClick={(e) => onHeroClick(e, 0)}>
              <img src='/images/BG_16_m.png' className='avatar' alt='' />
              <h4>{heroes[0].name}</h4>
              <h4 className='health'>HP {heroes[0].params.health}</h4>
              <h4 className='stamina'>STA {heroes[0].params.stamina}</h4>
            </div>
          )}
          <div className='tab' onClick={(e) => onHeroClick(e, 1)}>
            <img src='/images/BG_13_m.png' className='avatar' alt='' />
            <h4>{heroes[1].name}</h4>
            <h4 className='health'>HP {heroes[1].params.health}</h4>
            <h4 className='stamina'>STA {heroes[1].params.stamina}</h4>
          </div>
          <div className='tab' onClick={(e) => onHeroClick(e, 2)}>
            <img src='/images/BG_10_f.png' className='avatar' alt='' />
            <h4>{heroes[2].name}</h4>
            <h4 className='health'>HP {heroes[2].params.health}</h4>
            <h4 className='stamina'>STA {heroes[2].params.stamina}</h4>
          </div>
          <div className='tab' onClick={(e) => onHeroClick(e, 3)}>
            <img src='/images/BG_19_m.png' className='avatar' alt='' />
            <h4>{heroes[3].name}</h4>
            <h4 className='health'>HP {heroes[3].params.health}</h4>
            <h4 className='stamina'>STA {heroes[3].params.stamina}</h4>
          </div>
        </div>
      </nav>
      {/* <div className='tooltip' style={styles.tooltip}>
        <div className='center' style={styles.tooltipInner}>
          {tooltipText}
        </div>
      </div> */}
      <div className='map'>{renderMap()}</div>
      <div className='sidebar'></div>
      <footer className='status'>
        <h3>Dungeon Level {level}</h3>
        <p>{tooltipText}</p>
      </footer>
    </div>
  );
};

export default App;
