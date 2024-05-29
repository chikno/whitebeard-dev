import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { APIProvider } from './common/api-provider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>
);

