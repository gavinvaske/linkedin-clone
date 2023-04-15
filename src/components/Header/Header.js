import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt=""
        />
        <div className='header-search'>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={PeopleAltIcon} title='My Netword' />
        <HeaderOption Icon={WorkIcon} title='Jobs' />
        <HeaderOption Icon={ModeCommentIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption title='me' avatar='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
      </div>
    </div>
  )
}