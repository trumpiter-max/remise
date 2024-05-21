import React, { useEffect, useState } from 'react';
import { AppBar, Button, Container, Grid, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroPage from './HeroPage';

const logoStyle = {
  width: '50px',
  height: 'auto',
  cursor: 'pointer',
};

function HeaderComponent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
    }
  }, []);

  const handleIconClick = () => {
    if (currentUser) {
      navigate('/account');
    }
  };

  const handleClickLogo = () => {
    navigate('..');
  }

  return (
    <div>
      <AppBar position='fixed' sx={{ boxShadow:0, backgroundColor:'transparent', backgroundImage:'none', mt:2 }}>
        <Container maxWidth="lg">
          <Toolbar variant='regular' sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            flexShrink:0,
            borderRadius:'999px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter:'blur (24px)',
            maxHeight:40,
            border:'1px solid',
            borderColor: 'divider',
            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
          })}>
            <Grid sx={{ flexGrow:1, display:'flex', alignItems:'center', ml:'-18px', px:0 }}>
              {/* Add your logo here */}
              {isHome && <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={() => window.scrollTo({ top: document.getElementById('deal').offsetTop, behavior: 'smooth' })} sx={{ py: '6px', px: '22px' }}>
                  <Typography variant="body2" color="text.primary">Your reccommendation</Typography>
                </MenuItem>
                <Grid flexGrow={2}></Grid>
              </Grid>}
            </Grid>
            <Grid sx={{ display: { md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {!currentUser ? (
                <div>
                  <Button color="primary" variant="text" size="small" component="a" href="/signin/" target="_blank">Sign in</Button>
                  <Button color="primary" variant="contained" size="small" component="a" href="signup" target="_blank">Sign up</Button>
                </div>
              ) : (
                <AccountCircleIcon style={{cursor:'pointer'}} onClick={handleIconClick} color='primary'/>
              )}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <HeroPage id="hero"/>
    </div>
  )
}

export default HeaderComponent;
