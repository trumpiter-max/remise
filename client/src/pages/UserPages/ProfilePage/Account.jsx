import React from 'react'
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountDetail from '../../../components/AccountDetail/AccountDetail'
import { Badge, Stack, Typography } from '@mui/material';
import { Link } from '@mui/material';

function Account() {
  return (
    <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
            <AccountCircleIcon color='primary'/>
            <Link href='/profile' ml={1} sx={{textDecoration:'none', color:'black', ml:1}}>Username</Link>
          </div>
          <div className='account left-side-bar-item'>
            <AccountCircleIcon color='primary'/>
            <Typography sx={{textDecoration:'none', color:'red', ml:1}}>Account</Typography>
          </div>
          <div className='notice left-side-bar-item'>
          <Badge badgeContent={4} color="secondary">
              <CircleNotificationsIcon color='primary' />
            </Badge>
            <Link href='/notice' sx={{textDecoration:'none', color:'black', ml:1}} ml={1}>Notice</Link>
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