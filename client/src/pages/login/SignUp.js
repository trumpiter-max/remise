import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from '../../api/userapi';
import RegisterForm from '../../components/User/SignUpForm';

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


const handleSignupSubmit=async(value)=>{
  console.log('Form submitt: ', JSON.stringify(value));
  register(JSON.stringify(value));
  try {
    // const response = await axiosClient.post('api/signup', value);
    const response = await register(JSON.stringify(value));
    console.log('Registration successful: ', response);
  }
  catch(error){
    console.log('Error during registration: ', error);
  }
  // khi submit gọi hàm này
};

// const handleSignupSubmit=(data)=>{
//   console.log('ok');
//   console.log('Form submit from SignUp: ', data);
//   // console.log('Form submit: ', data);
//   //hàm test form
// };
export default function SignUp() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  
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
        {/* <Register onSubmit={console.log('OK')}/> */}
        </Box>
        <Copyright sx={{ mt: 5 }}/>
      </Container>
    </ThemeProvider>
  );
}