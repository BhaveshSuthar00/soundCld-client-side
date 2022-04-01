import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RenderingStatus } from './Contexts/Status'

ReactDOM.render(
  // <React.StrictMode>
    /* </React.StrictMode>, */
  <RenderingStatus>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RenderingStatus>,
  document.getElementById('root')
);
