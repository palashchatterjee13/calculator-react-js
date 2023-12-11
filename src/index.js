import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import React from 'react';
import './Calculator.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
    <div className='about'> A simple calculator made in ReactJS <br /> by Palash Chatterjee</div>
  </React.StrictMode>
);