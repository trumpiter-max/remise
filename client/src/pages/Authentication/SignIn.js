import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../../api/signinapi';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import i18n from "i18next";
import { useTranslation } from "react-i18next";

const defaultTheme = createTheme();

export default function SignIn() {
  const { t, i18n } = useTranslation();

  const [loginError, setLoginError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await login(JSON.stringify({ email, password }));
      console.log(JSON.stringify({ email, password }))
      console.log(response.success)
      const {message}=response;
      // console.log(message.msgBody)
      if (message.msgError===false) {
        console.log('User logged in successfully');
        console.log(response)
        setLoginError(false);
        setLoginSuccess('Here is a gentle confirmation that your action was successful.');
        setIsRegistered(true);
      } else {
        console.log('User login failed');
        setLoginError(true);
        setLoginSuccess('Registration failed. Please try again.');
        setIsRegistered(false);
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setLoginError(true);
      setLoginSuccess('Registration failed. Please try again.');
      setIsRegistered(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {loginError && (
              <Typography variant="body2" color="error">
                Incorrect email or password
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
              
            </Button>
            {isRegistered && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              {loginSuccess}
              </Alert>
              )}
            <Grid container>
              <Grid item xs>
                <Link href="/reset-password" variant="body2">
                  Forget password
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have account? Sign up now"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
