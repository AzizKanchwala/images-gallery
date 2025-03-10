import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const boot = ReactDOM.createRoot(document.getElementById('boot'));
boot.render(<h2>Aziz Kanchwala</h2>);
