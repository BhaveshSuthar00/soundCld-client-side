import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RenderingStatus } from './Contexts/Status'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store} >
    <RenderingStatus>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RenderingStatus>
  </Provider>,
  document.getElementById('root')
);
