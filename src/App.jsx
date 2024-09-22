// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/home';
import Projects from './pages/projects';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Wrap with <Home /> */}
          <Route path="/projects" element={<Projects />} /> {/* Wrap with <Projects /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;