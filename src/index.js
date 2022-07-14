import React from 'react';
import { Global } from '@emotion/react';
import { global, reset } from "./styles/global";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/auth-context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <Global styles={reset} />
      <Global styles={global} />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
