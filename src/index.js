import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './stores';
import '../src/css/app.css';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className='page-color page-margin page-padding'>
        <App />
      </div>
    </React.StrictMode>
  </Provider>
);