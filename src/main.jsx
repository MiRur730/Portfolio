import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css.bootstrap.min.css';
// import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>

 
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
// reportWebVitals()