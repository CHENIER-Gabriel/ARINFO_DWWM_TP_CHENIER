// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Assurez-vous que le chemin d'importation est correct
import './index.css';  // Si vous avez un fichier CSS global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
