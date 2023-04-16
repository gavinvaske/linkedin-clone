import React from 'react';
import './Post.scss';
import { Avatar } from '@mui/material';
import Button from '../Button/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SendIcon from '@mui/icons-material/Send';

export default function Post({ name, description, message, photoUrl }) {
  return <div className="post">
    <div className="post-header">
      <div className="post-profile-picture">
        <Avatar src={photoUrl}/>
      </div>
      <div className="post-info">
        <p className="poster-name">{name}</p>
        <p className="poster-description">{description}</p>
      </div>
    </div>
    <div className="post-body">{message}</div>
    <div className="post-footer">
      <Button 
        iconColor={'gray'} 
        Icon={ThumbUpOffAltIcon} 
        title='Like' 
      />
      <Button 
        iconColor={'gray'} 
        Icon={ChatBubbleIcon} 
        title='Comment' 
      />
      <Button 
        iconColor={'gray'} 
        Icon={CompareArrowsIcon} 
        title='Share' 
      />
      <Button 
        iconColor={'gray'} 
        Icon={SendIcon} 
        title='Send' 
      />
    </div>
  </div>
}