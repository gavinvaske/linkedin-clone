import React, { useEffect, useState } from 'react';
import './Feed.scss';
import { Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Button from '../Button/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import Post from '../Post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';

export default function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  }, []);

  const createPost = (e) => {
    e.preventDefault();
  
    db.collection('posts').add({
      name: 'Gavin Vaske',
      description: 'this is test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  return <div className="feed">
    <div className='feed-input-container'>
      <Avatar className='feed-input-container-avatar'/>
      <div className="post-input-field">
        <CreateIcon />
        <form action="">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='Start a post'></input>
          <button onClick={createPost} type='submit'>Send</button>
        </form>
      </div>
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
      {posts && posts.map(({id, data: { name, description, message, photoUrl}}) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  </div>
}