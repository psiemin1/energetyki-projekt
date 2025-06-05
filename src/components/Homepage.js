import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

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

        <Link to="/ankieta">
          <button className="cta-button transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600">
            Weź udział w ankiecie
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Homepage;
