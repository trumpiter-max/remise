import React from 'react';
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
import UserPage from './resources/page/user/UserPage';
import CompareProduct from './resources/page/CompareProduct';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        { routes.map((route) =>{
          const Page=route.page;
          const Layout = route.isShowHeader? DefaultComponent:Fragment;
          return (
            <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
            )
        })}
        </Routes>
      </Router>
    </div>
  );
      }

export default App;
