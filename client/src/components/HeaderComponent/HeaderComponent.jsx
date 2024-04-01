import React from 'react'
import './HeaderComponent.css'


//material ui
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import logo from '../../resources/images/logo_remise.png';
import { Badge } from '@mui/material';
// import icon
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';

function StoreIcon(props) {
  return (
    <LocalGroceryStoreIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </LocalGroceryStoreIcon>
  );
}

function HeaderComponent() {
  return (
      <Box>
        <Grid className='header-bar' container spacing={1} columns={12}>
          <Grid xs={3}>
            <img className='logo' src={logo} alt='Logo Remise'/>
          </Grid>
          <Grid className='header-item search' xs={5}>
            {/* tìm kiếm */}
            <Paper component="form"
              sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 500 }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Tìm kiếm sản phẩm"/>
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </Grid>
          <Grid xs={2}>
            <Grid className='header-item'>
              <Grid className='item'>
                <AccountCircle className='mgr4'/>
                <div>Tài khoản</div>
                <ArrowDropDownIcon />
              </Grid>
              <div className='item'>
                <div>Đăng nhập</div>
                <div>&nbsp;/&nbsp;</div>
                <div>Đăng ký</div>
              </div>
            </Grid>
            {/* đăng nhập, đăng ký */}
          </Grid>
          <Grid className='header-item' sx={{display:'flex'}}>
              
              <Badge badgeContent={4} color="primary" sx={{marginRight: 1}}>
                <StoreIcon className='mgr4'/>
              </Badge>
              <Grid>Giỏ hàng</Grid>
          </Grid>        
        </Grid>
      </Box>
  )
}

export default HeaderComponent