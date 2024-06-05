// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
