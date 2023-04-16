import React, { useEffect, useState } from 'react';
import './Login.scss';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) return alert('pleast enter a full name');

    dispatch(async () => {
      try {
        const userAuth = await auth.createUserWithEmailAndPassword(email, password);

        await userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePictureUrl
        });
  
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePictureUrl
        });
      } catch(error) {
        alert('Error during registration: ' + error.message);
      }
    });
  }

  const loginToApp = async (e) => {
    e.preventDefault();

    dispatch(async () => {
      try {
        const userAuth = await auth.signInWithEmailAndPassword(email, password)
        login({
          email: userAuth.user.email,
          uid: userAuth.user.id,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL
        })
      } catch (error) {
        alert('Error during login: ' + error.message);
      }
    });
  }

  return <div className="login">
    <img src="https://blog.pearsoncollegelondon.ac.uk/content/images/2018/09/2000px-LinkedIn_Logo.svg.png" alt="" />
    <form className='login-form'>
      <input
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder='Full name (required if registering)' 
      />
      <input
        type="text" 
        onChange={(e) => setProfilePictureUrl(e.target.value)}
        placeholder='Profile pic URL (optional)' 
      />
      <input
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='Email' 
      />
      <input
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Password'
      />

      <button type='submit' onClick={(e) => loginToApp(e)}>Sign In</button>
    </form>
    <p>Not a member? <span className='register-link' onClick={(e) => register(e)}>Register Now</span></p>
  </div>
}