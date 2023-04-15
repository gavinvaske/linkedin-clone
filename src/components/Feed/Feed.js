import React from 'react';
import './Feed.scss';
import { Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Button from '../Button/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';

export default function Feed() {
  return <div className="feed">
    <div className='feed-input-container'>
      <Avatar className='feed-input-container-avatar'/>
      <input placeholder='Start a post'></input>
    </div>
    <div className='post-type-options'>
      <Button 
        Icon={CameraAltIcon} 
        title='Photo'
        iconColor='blue'
      />
      <Button 
        Icon={VideocamIcon} 
        title='Video'
        iconColor='green'
      />
      <Button 
        Icon={CalendarMonthIcon} 
        title='Event'
        iconColor='orange'
      />
      <Button 
        Icon={CreateIcon} 
        title='Write Article'
        iconColor='red'
      />
    </div>
  </div>
}