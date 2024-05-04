import React from 'react';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { Fragment } from 'react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Remise"
  }, []);
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
