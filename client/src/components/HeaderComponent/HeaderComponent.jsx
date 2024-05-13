import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Container, Grid, IconButton, MenuItem, Paper, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import logo from '../../resources/images/logo_remise.png';
import HeroPage from './HeroPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from 'react-router-dom';

const logoStyle={
  width: '50px',
  height: 'auto',
  cursor: 'pointer',
};

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   borderRadius: '1000px', // Lưu ý chữ "R" viết hoa
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));



function HeaderComponent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user); // Đặt trạng thái từ localStorage
    }
  }, []);
  // const [auth, setAuth]= useState(false);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      // setOpen(false);
    }
  };

  const navigate = useNavigate(); // Tạo hàm điều hướng

  const handleIconClick = () => {
    // Kiểm tra nếu currentUser tồn tại, chuyển hướng đến trang mong muốn
    if (currentUser) {
      navigate('/profile'); // Chuyển hướng đến trang Profile
    }
  };
  const handleClickLogo=()=>{
    navigate('..');
  }
  return (
      <div>
        <AppBar
          position='fixed'
          sx={{
            boxShadow:0,
            backgroundColor:'transparent',
            backgroundImage:'none',
            mt:2,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              variant='regular'
              sx={(theme)=>({
                display: 'flex',
                alignItems: 'center',
                justifyContent:'space-between',
                flexShrink:0,
                borderRadius:'999px',
                backgroundColor:
                  theme.palette.mode=
                  'rgba(255, 255, 255, 0.9)',
                  backdropFilter:'blur (24px)',
                  maxHeight:40,
                  border:'1px solid',
                  borderColor: 'divider',
                  boxShadow:
                    theme.palette.mode=
                    `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
              })}
            >
              <Box
              sx={{
                flexGrow:1,
                display:'flex',
                alignItems:'center',
                ml:'-18px',
                px:0,
              }}
              >
                <img
                  src={logo}
                  onClick={handleClickLogo}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
                {isHome&&
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <MenuItem
                    onClick={() => scrollToSection('flash-sale')}
                    sx={{ py: '6px', px: '22px' }}
                  >
                    <Typography variant="body2" color="text.primary" >
                      Flash Sale
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection('best-sale')}
                    sx={{ py: '6px', px: '22px' }}
                  >
                    <Typography variant="body2" color="text.primary">
                      Best Selling Products
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection('deal')}
                    sx={{ py: '6px', px: '22px' }}
                  >
                    <Typography variant="body2" color="text.primary">
                      Deals of the Day
                    </Typography>
                  </MenuItem>
                  <Grid flexGrow={2}></Grid>
                  <Paper component="form"
                    sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                    {/* <Grid flexGrow={2}></Grid> */}
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Tìm kiếm sản phẩm"/>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Box>}
              </Box>
              <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
                {/* <ToggleColorMode/> */}
              {!currentUser&&
                <div>
                  <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/searchform/"
                  target="_blank"
                >
                  Fillter
                </Button>
                  <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/signin/"
                  target="_blank"
                >
                  Sign in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component="a"
                  href="signup"
                  target="_blank"
                >
                  Sign up
                </Button>
                </div>
              }
              {currentUser&&<AccountCircleIcon style={{cursor:'pointer'}} onClick={handleIconClick} color='primary'/>}
            </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <HeroPage id="hero"/>
      </div>
  )
}

export default HeaderComponent