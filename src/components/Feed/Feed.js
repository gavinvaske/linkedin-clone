import React from 'react';
import './Feed.scss';
import { Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Button from '../Button/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import Post from '../Post/Post';

const posts = [
  {
    name: 'Gavin Vaske',
    description: 'Software Engineer at John Deere',
    message: 'Something really cool happened',
    profileUrl: ''

  }
]

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

    <div className="posts">
      {posts && posts.map(post => <Post {...post} />)}
    </div>
  </div>
}