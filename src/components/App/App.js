import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../../features/user/userSlice';
import Login from '../Login/Login';
import { auth } from '../../firebase';
import Widgets from '../Widgets/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
      } else {
        dispatch(logout);
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
        {!user ? 
          (<Login />) :
          (
            <div className="app-body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          )}
    </div>
  );
}

export default App;
