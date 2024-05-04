import React from 'react'
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import AccountDetail from '../../components/AccountDetail/AccountDetail';
import { Stack, Typography } from '@mui/material';

function Account() {
  return (
    <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <h7>Username</h7>
        </div>
        <div className='account left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <h7><Typography variant ="h7" color = "red">Account</Typography></h7>          
        </div>
        <div className='store left-side-bar-item'>
          <LocalGroceryStoreIcon color='primary' />
          <h7>Store</h7>
        </div>
        <div className='notice left-side-bar-item'>
          <CircleNotificationsIcon color='primary' />
          <h7>Notice</h7>
        </div>
        <div className='edit left-side-bar-item'>
          <ModeEditRoundedIcon color='primary' />
          <h7>Edit profile</h7>
        </div>
      </div>
      <div className='profile-body'>
        <Stack spacing={2}>
            <AccountDetail/>
        </Stack>
      </div>
    </div>
  )
}

export default Account