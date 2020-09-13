import React, { Component } from 'react';
// import { helpers, propTypes } from '../utils';
import '../assets/styles/common.scss';

export default class Control extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ active: true });
    setTimeout(() => {
      this.setState({ active: false });
    }, 100);
    if (this.props.type === 'move') {
      this.props.move(this.props.direction);
    } else {
      this.props.turn(this.props.direction);
    }
    this.$emit(this.props.type, this.props.direction);
  }

  render() {
    const { type, direction } = this.props;
    // const styles = {
    //   control: {
    //     backgroundImage: helpers.backgroundImage(
    //       `control/control-${this.props.type}-${this.props.direction.name}${this.state.active ? '-active' : ''}`
    //     ),
    //   },
    // };

    // return <div className='list-item control' style={styles.control} onClick={this.handleClick}></div>;
    return (
      <div className='control' onClick={this.handleClick}>
        {this.props.direction.name}
      </div>
    );
  }
}
