import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RenderingStatus } from './Contexts/Status'
import { store } from './Redux/store'
import  { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);
