import React from 'react'
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import ProductFlashSale from '../../components/HomePage/ProductFlashSale'
import { Stack } from '@mui/material';

function ProfilePage() {
  return (
    <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <h7>Username</h7>
        </div>
        <div className='account left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <h7>Account</h7>
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
        <SearchInput></SearchInput>
        <Stack spacing={2}>
          <ProductFlashSale/>
          <ProductFlashSale/>
          <ProductFlashSale/>
        </Stack>
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