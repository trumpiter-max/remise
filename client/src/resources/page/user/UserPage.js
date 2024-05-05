import React from 'react'
import '../../../styles/HeaderComponent.css'


//material ui
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/system';

import logo from '../../images/logo.svg'

// import icon
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Typography } from '@mui/material';
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
            <Grid className='header-item header-right'>
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
              <StoreIcon className='mgr4'/>
              <Grid>Giỏ hàng</Grid>
          </Grid>
          
        </Grid>
      </Box>
  )
}

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Remise
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const defaultTheme = createTheme();

export default function Profile(){
    return(
        <Container component="main" maxWidth="xl">
            <HeaderComponent/>
            <CssBaseline />
            <Typography>Test</Typography>            
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                }}
        >
            <Copyright/>
        </Box>
        </Container>
        
    );
}