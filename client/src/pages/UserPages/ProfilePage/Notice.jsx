import React from 'react'
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import ProductFlashSale from '../../../components/HomePage/ProductFlashSale'
import { Badge, Grid, Link, Stack, Typography } from '@mui/material';
import tiviImage from '../../../resources/images/HomePage/tivi.jpg'
import NoticeList from '../../../components/User/ProfilePage/NoticeItem/NoticeList';


function NoticePage() {
  return (
    <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <Link href='/profile' ml={1} sx={{textDecoration:'none', color:'black', ml:1}}>Username</Link>
        </div>
        <div className='account left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <Link href="/account" sx={{textDecoration:'none', color:'black', ml:1}}>Account</Link>
        </div>
        <div className='notice left-side-bar-item'>
            <Badge badgeContent={4} color="secondary">
                <CircleNotificationsIcon color='primary' />
            </Badge>
            <Typography sx={{textDecoration:'none', color:'red', ml:1}} ml={1}>Notice</Typography>
        </div>
      </div>
      <div className='profile-body'>
        <SearchInput></SearchInput>
        <NoticeList noticeList={noticeList}/>
      </div>
    </div>
  )
}

const noticeList=[
    {
        id:1,
        name: 'TiviSony',
        thumbnailUrl: tiviImage,
        price: 10,
        shop: 'Shoppe',
    },
    {
        id:2,
        name: 'TiviSony2',
        thumbnailUrl: tiviImage,
        price: 10,
        shop: 'Lazada',
    },
    {
        id:3,
        name: 'TiviSony3',
        thumbnailUrl: tiviImage,
        price: 10,
        shop: 'Shoppe',
    },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10,
        shop: 'Shoppe',
    },
    {
      id:4,
      name: 'TiviSony4',
      thumbnailUrl: tiviImage,
      price: 10,
      shop: 'Shoppe',
    },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10,
        shop: 'Shoppe',
    },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10,
        shop: 'Shoppe',
    },
  ]

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
          width: '97%',
          marginRight: '5px',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      />
    </div>
  );
};

export default NoticePage