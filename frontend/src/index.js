import React from 'react';
import ReactDOM from 'react-dom';
// import jq
import './index.css';
import App from './App';
const $ = require( "jquery" )( window );
// import reportWebVitals from './reportWebVitals';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>;
{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
