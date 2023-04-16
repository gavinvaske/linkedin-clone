import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';
import { auth } from '../../firebase';
import { Avatar } from '@mui/material';

export default function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt=""
        />
        <div className='header-search'>
          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={PeopleAltIcon} title='My Netword' />
        <HeaderOption Icon={WorkIcon} title='Jobs' />
        <HeaderOption Icon={ModeCommentIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption onClick={logoutOfApp} title='me' avatar={<Avatar src={user ? user.profileUrl : ''} />} />
      </div>
    </div>
  )
}