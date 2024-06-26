import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from '../../api/userapi';
import RegisterForm from '../../components/User/SignUpForm';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

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
export default function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [isSubmit, setIsSubmitForm]= useState(false);
  const handleSignupSubmit= async(value)=>{
    const { username, email, password } = value;
    const signUpData={
      email,
      username,
      password
    }
    console.log('Form submitt: ', JSON.stringify(signUpData));
    try {
      // const response = await axiosClient.post('api/signup', value);
      const response = await register(JSON.stringify(signUpData));
     if (!response.message.msgError){
      localStorage.setItem('username', username);
      localStorage.setItem('email', email)
      setRegisterSuccess('Here is a gentle confirmation that your action was successful.');
      setIsRegistered(true);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email)
     }
     setIsSubmitForm(true);
    }
    catch(error){
      console.log('Error during registration: ', error);
      setRegisterSuccess('Registration failed. Please try again.');
      setIsRegistered(false);
    }
  }
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
        <Typography>
            <h1>REMISE</h1>
        </Typography>
        <RegisterForm onSubmit={handleSignupSubmit}/>
          {isSubmit&& (isRegistered ?
          (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {registerSuccess}
            </Alert>
          ):
          (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {registerSuccess}
            </Alert>
          )
          )}
        </Box>
        <Copyright sx={{ mt: 5 }}/>
      </Container>
    </ThemeProvider>
  );
}