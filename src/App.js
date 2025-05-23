import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dane from './components/Dane';
import Ankieta from './components/Ankieta';
import Glosowanie from './components/Glosowanie';
import DlaPsychologa from './components/DlaPsychologa';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <h2>Nawigacja</h2>
          <ul>
            <li><Link to="/dane">Zebrane dane</Link></li>
            <li><Link to="/ankieta">Ankieta</Link></li>
            <li><Link to="/glosowanie">Głosowanie</Link></li>
            <li><Link to="/psycholog">Dla psychologa</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/dane" element={<Dane />} />
            <Route path="/ankieta" element={<Ankieta />} />
            <Route path="/glosowanie" element={<Glosowanie />} />
            <Route path="/psycholog" element={<DlaPsychologa />} />
            <Route path="/" element={<Dane />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
