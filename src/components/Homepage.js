import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <section className="hero-section">
        <h1>Zrozum i Wspieraj</h1>
        <p>Zrozum i Wspieraj to nowoczesna i przyjazna platforma stworzona z myślą o młodzieży, nauczycielach oraz specjalistach wspierających rozwój uczniów. Naszym celem jest lepsze poznanie potrzeb młodych ludzi, ich codziennych wyzwań, emocji i oczekiwań – wszystko po to, by wspólnie budować szkołę opartą na empatii, dialogu i wzajemnym zrozumieniu.</p>
        <p>Na stronie znajdują się wyniki badań i ankiet przeprowadzonych wśród uczniów, dotyczące m.in. ich:</p>
        <ul>
          <li>samopoczucia w szkole,</li>
          <li>relacji rówieśniczych i nauczycielskich,</li>
          <li>presji szkolnej i stresu,</li>
          <li>potrzeb wsparcia emocjonalnego,</li>
          <li>oceny atmosfery szkolnej i bezpieczeństwa.</li>
        </ul>
        <p>Dodatkowo, użytkownicy mogą:</p>
        <ul>
          <li>brać udział w kolejnych badaniach i głosowaniach,</li>
          <li>dzielić się swoją opinią anonimowo,</li>
          <li>korzystać z materiałów przygotowanych przez psychologów.</li>
        </ul>
        <button className="cta-button">Weź udział w ankiecie</button>
      </section>
      <section className="data-section">
        <h2>Zebrane dane</h2>
        <div className="data-tiles">
          <div className="data-tile">
            <span className="data-icon">🏆</span>
            <span className="data-value">82%</span>
          </div>
          <div className="data-tile">
            <span className="data-icon">📈</span>
            <span className="data-value">5 400</span>
          </div>
        </div>
        <div className="placeholder-tiles">
          <div className="placeholder-tile">Placeholder1</div>
          <div className="placeholder-tile">Placeholder2</div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
