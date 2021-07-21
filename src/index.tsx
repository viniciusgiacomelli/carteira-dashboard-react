import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './components/hooks/themes';
import { AuthProvider } from './components/hooks/auth';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
