// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Property from './pages/Property';
import MaintenanceRequestForm from './pages/Resident';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<Property />} />
        <Route path="/resident" element={<MaintenanceRequestForm />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
