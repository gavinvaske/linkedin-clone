import React from 'react';
import './Button.scss';

export default function Button({Icon, title, iconColor}) {
  return <div class='button'>
    {Icon && <Icon style={{'color': iconColor}}/>}
    <p className='button-title'>{title}</p>
  </div>
}