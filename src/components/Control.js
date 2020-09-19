import React from 'react';
import '../assets/styles/common.scss';

function Control(props) {
  return <div className='control'>{props.direction.name}</div>;
}
