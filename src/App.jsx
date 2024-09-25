// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Wrap with <Home /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;