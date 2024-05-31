import React from 'react'
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountDetail from '../../../components/AccountDetail/AccountDetail'
import { Badge, Button, Stack, Typography } from '@mui/material';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../api/signinapi';

function Account() {
  const username=localStorage.getItem('username');
  const navigate=useNavigate();
  const handleLogout = async () => {
    // Kiểm tra nếu currentUser không tồn tại, chuyển hướng đến trang mong muốn
    try {
      // const response = await axiosClient.post('api/signup', value);
      const username=localStorage.getItem('username');
      const email=localStorage.getItem('email');
      const response = await logout({username, email});
      console.log('Registration successful: ', response);
      localStorage.setItem('currentUser', null);
      navigate('..'); // Chuyển hướng đến trangchủ
    }
    catch(error){
      console.log('Error during registration: ', error);
    }
  };
  return (
    <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
            <AccountCircleIcon color='primary'/>
            <Typography ml={1} sx={{textDecoration:'none', color:'black', ml:1}}>{username||'Username'}</Typography>
          </div>
          <div className='account left-side-bar-item'>
            <AccountCircleIcon color='primary'/>
            <Typography sx={{textDecoration:'none', color:'red', ml:1}}>Tài khoản</Typography>
          </div>
          <div className='notice left-side-bar-item'>
          <Badge badgeContent={0} color="secondary">
              <CircleNotificationsIcon color='primary' />
            </Badge>
            <Link href='/notice' sx={{textDecoration:'none', color:'black', ml:1}} ml={1}>Thông báo</Link>
          </div>
          <div className='notice left-side-bar-item' onClick={handleLogout}>
            <Button ml={1}>Logout</Button>
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