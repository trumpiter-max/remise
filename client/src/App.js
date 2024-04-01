import React from 'react';
import './App.css';
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
