import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/css/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='page-color page-margin page-padding'>
      <App />
    </div>
  </React.StrictMode>
);