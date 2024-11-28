import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamDetail from './pages/TeamDetail';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />}>
          <Route path=":id" element={<TeamDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
