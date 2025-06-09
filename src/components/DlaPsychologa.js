import React from 'react';
import './DlaPsychologa.css';

function DlaPsychologa() {
  return (
    <div className="psycholog-container">
      <h2>Dla psychologa</h2>

      <section className="psycholog-section">
        <h3>Metody zapobiegawcze</h3>
        <ul>
          <li>Zaangażowanie samorządu uczniowskiego</li>
          <li>Zbudowanie rodzinnych zdrowych nawyków</li>
          <li>Dofinansowanie zakupu zdrowszych alternatyw</li>
          <li>Wyjaśnienie konsekwencji</li>
          <li>Kary dyscyplinarne (uwagi, rozmowy z nauczycielem)</li>
        </ul>
      </section>

      <section className="psycholog-section">
        <h3>Materiały do nauki</h3>
        <ul>
          <li>Prezentacje</li>
          <li>Slajdy z detalami</li>
          <li>Makiety uszkodzonych organów (wizualna edukacja)</li>
          <li>Kursy o odżywianiu się</li>
        </ul>
      </section>
    </div>
  );
}

export default DlaPsychologa;
