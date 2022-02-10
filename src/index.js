import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Store from './redux/store';
import { Provider } from 'react-redux';

const app = (
    <Provider store={Store}>
       <BrowserRouter>
            <App />
          </BrowserRouter>
    </Provider>       
  )

  ReactDOM.render(app, document.querySelector('#root'))
