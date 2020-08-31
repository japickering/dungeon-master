import React, { Component } from 'react';
import { helpers } from '@/utils';

export default class Player extends Component {
  render() {
    const left = this.props.position.x * 28 + 'px';
    const top = this.props.position.y * 28 + 'px';
    const styles = {
      player: {
        left: left,
        top: top,
        width: '28px',
        height: '28px',
        backgroundSize: '100% 100%',
        backgroundImage: helpers.backgroundImage('map/player'),
        transform: helpers.transformRotate(this.props.rotation),
      },
    };

    return <div className='player' style={styles.player}></div>;
  }
}
