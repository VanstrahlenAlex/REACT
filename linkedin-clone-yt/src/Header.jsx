// rfce
import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
  <div className='header'>
    <div className="header__left">
      <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
      <LinkedInIcon />
      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>
    </div>
    <div className="header__right">
    <HeaderOption Icon={HomeIcon} title='Home' />
    <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
    <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
    <HeaderOption Icon={ChatIcon} title='Messaging'/>
    <HeaderOption Icon={NotificationsIcon} title='Notifications'/>



    <HeaderOption />

    </div>
    </div>
  )

}

export default Header;