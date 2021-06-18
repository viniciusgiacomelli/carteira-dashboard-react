import React from 'react';
import ReactDOM from 'react-dom';



import Dashboard from './pages/Dashboard';
import List from './pages/List';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard/>
    <List/>
  </React.StrictMode>,
  document.getElementById('root')
);
