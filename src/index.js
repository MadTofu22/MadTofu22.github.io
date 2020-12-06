import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
require('dotenv').config({path: '../../.env'});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
