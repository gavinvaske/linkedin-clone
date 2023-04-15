import React from 'react';
import './HeaderOption.scss';
import { Avatar } from '@mui/material';

export default function HeaderOption({ avatar, Icon, title }) {
    return <div className='header-option'>
      {Icon && <Icon className='header-option-icon' />}
      {avatar && 
        <Avatar
          className='header-option-icon'
          src={avatar}/>}
      <h3 className='header-option-title'>{title}</h3>
    </div>
    
}