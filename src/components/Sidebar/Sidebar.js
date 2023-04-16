import React from 'react';
import './Sidebar.scss';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

export default function Sidebar() {
  const user = useSelector(selectUser)

  const recentItem = (topic) => (
    <div className='sidebar-recent-item'>
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return <div className="sidebar">
    <div className="sidebar-top">
      <Avatar src={user.photoUrl}> 
        {user.displayName ? user.displayName[0] : ''}
      </Avatar>
      <h3>{user.displayName}</h3>
      <h5>Software Engineer at John Deere ISG</h5>
    </div>

    <div className="sidebar-stats">
      <div className="sidebar-stat">
        <p>Who's viewed your profile</p>
        <p className='stat-number'>47</p>
      </div>

      <div className="sidebar-stat">
        <p>Impressions of your post</p>
        <p className='stat-number'>408</p>
      </div>
    </div>

    <div className="sidebar-bottom">
      <p>Recent</p>
      {recentItem('reactJs')}
      {recentItem('programming')}
      {recentItem('softwareEngineering')}
      {recentItem('developer')}
    </div>
  </div>
}