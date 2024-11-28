import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Team from './pages/Team';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
