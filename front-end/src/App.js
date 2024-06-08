// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Property from './pages/Property';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
