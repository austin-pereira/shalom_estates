// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
console.log("Running")
root.render(<App />);
