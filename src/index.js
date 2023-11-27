import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import Routes from './components/Router';
import reportWebVitals from './reportWebVitals';
import { UseContext } from './components/UserContext';
import App from './App';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';


const darktheme=createTheme({
  palette:{
    mode:"dark"
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>

    <App/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();