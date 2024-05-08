import React from 'react'
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ProductFlashSale from '../../../components/HomePage/ProductFlashSale'
import { Badge, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div>
      <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <Link href='/profile' ml={1} sx={{textDecoration:'none', color:'black', ml:1}}>Username</Link>
        </div>
        <div className='account left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <Link href="/account" sx={{textDecoration:'none', color:'black', ml:1}}>Account</Link>        </div>
        <div className='notice left-side-bar-item'>
          <Badge badgeContent={4} color="secondary">
            <CircleNotificationsIcon color='primary' />
          </Badge>
          <Link href='/notice' sx={{textDecoration:'none', color:'black', ml:1}} ml={1}>Notice</Link>
        </div>
      </div>
      <div className='profile-body'>
        <SearchInput></SearchInput>
        <Stack spacing={2}>
          <ProductFlashSale/>
          <ProductFlashSale/>
          <ProductFlashSale/>
        </Stack>
      </div>
    </div>
    </div>
  )
}

const SearchInput = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        style={{
          borderRadius: '5px',
          padding: '8px',
          border: '1px solid #ccc',
          width: '50%',
          marginRight: '5px',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      />
    </div>
  );
};

export default ProfilePage