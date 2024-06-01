import React, { useEffect, useState } from 'react';
import { AppBar, Button, Container, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroPage from './HeroPage';
import { useTranslation } from "react-i18next";


import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const languages = [
  { value: "en", text: "English" },
  { value: "vi", text: "Vietnamese" },
];
function HeaderComponent() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
    setLang(languageValue);
  };
  
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
                  <Typography variant="body2" color="text.primary"> {t('reccommendation')} </Typography>
                </MenuItem>
                <Grid flexGrow={2}></Grid>
              </Grid>}
            </Grid>
            <Grid sx={{ display: { md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {!currentUser ? (
                <div >
                  {/*<select value={lang} onChange={changeLanguage}>
                      {languages.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.text}
                        </option>
                      );
                    })}
                  </select>
                  */}

                  <FormControl variant="outlined" maxWidth >
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                      labelId="language-select-label"
                      value={lang}
                      onChange={changeLanguage}
                      label="Language"
                    >
                      {languages.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.text}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button  color="primary"  style={{ padding: 15 }} variant="text" size="small" component="a" href="/signin/" target="_blank" aria-label='btn-signin'>{t("signin")}</Button>
                  <Button color="primary" variant="contained" size="small" component="a" href="signup" target="_blank" aria-label='btn-signup'>{t("signup")}</Button>
                </div>
              ) : (
                <div style={{display:'flex'}}>
                <div style={{marginRight:'20px'}}>
                  <select>
                      {languages.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.text}
                        </option>
                      );
                    })}
                    </select>
                </div>
                <AccountCircleIcon style={{cursor:'pointer'}} onClick={handleIconClick} color='primary'/>
                </div>
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
