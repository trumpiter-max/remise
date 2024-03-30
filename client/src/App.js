import React from 'react';
import logo from './resources/images/logo.svg';
import './App.css';

// Material components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { makeStyles } from '@emotion/styled';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './resources/page/login/SignIn';
import SignUp from './resources/page/login/SignUp';
import ResetPassword from './resources/page/login/ResetPassword';
/*
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright of '}
      <Link color="inherit" href="#">
        Remise
      </Link>{'© '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
*/
function App() {
  return (
    /*
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello From Docker For React
        </p>
      </header> 
      <Copyright />
    </div>
    */
   <div>
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
