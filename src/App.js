import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dane from './components/Dane';
import Ankieta from './components/Ankieta';
import Glosowanie from './components/Glosowanie';
import DlaPsychologa from './components/DlaPsychologa';
import Homepage from './components/Homepage';

function NavigationBar() {
  return (
    <nav className="top-navigation">
      <ul>
        <li className="nav-item dane-section"><Link to="/dane">Zebrane dane</Link></li>
        <li className="nav-item ankieta-section"><Link to="/ankieta">Ankieta</Link></li>
        <li className="nav-item"><Link to="/">Strona główna</Link></li>
        <li className="nav-item glosowanie-section"><Link to="/glosowanie">Głosowanie</Link></li>
        <li className="nav-item psycholog-section"><Link to="/psycholog">Dla psychologa</Link></li>
      </ul>
    </nav>
  );
}

function RoleSelection({ onRoleSelect }) {
  const roles = ["uczeń", "nauczyciel", "psycholog", "inne"];

  return (
    <div className="role-selection-container">
      <h2>Kim jesteś?</h2>
      <div className="roles-grid">
        {roles.map(role => (
          <button
            key={role}
            className="role-button"
            onClick={() => onRoleSelect(role)}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleRoleSelect = (role) => {
    setUserRole(role);
  };

  if (!userRole) {
    return <RoleSelection onRoleSelect={handleRoleSelect} />;
  }

  return (
    <Router>
      <div className="app-container">
        <div className="top-banner">Zrozum i Wspieraj</div>
        <NavigationBar />
        <main className="main-content">
          <Routes>
            <Route path="/dane" element={<Dane />} />
            <Route path="/ankieta" element={<Ankieta />} />
            <Route path="/glosowanie" element={<Glosowanie />} />
            <Route path="/psycholog" element={<DlaPsychologa />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
