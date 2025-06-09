import React, { useState, useCallback } from 'react';
import './Ankieta.css';

function Ankieta() {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleButtonClick = useCallback((buttonName) => {
    setActiveButton(buttonName);
    setSelectedOptions({});
  }, []);

  const handleOptionClick = (question, option) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [question]: option
    }));
  };

  const handleSubmit = () => {
  console.log("Odpowiedzi ankiety:", selectedOptions);
  alert("Dziękujemy za wypełnienie ankiety!");

  const dotychczasowe = JSON.parse(localStorage.getItem("wynikiAnkietyZbiorcze")) || [];
  dotychczasowe.push(selectedOptions);
  localStorage.setItem("wynikiAnkietyZbiorcze", JSON.stringify(dotychczasowe));

  setActiveButton(null);
};


  let content;
  switch (activeButton) {
    case "Energetyki":
      content = (
        <>
          <div className="survey-island">
            <p className="dane-text">1. Jak często spożywasz napoje energetyczne?</p>
            <div className="options-container">
              {["Codziennie", "Kilka razy w tygodniu", "Raz w tygodniu", "Raz w miesiącu", "Nigdy"].map(opt => (
                <button
                  key={opt}
                  className={`option-button ${selectedOptions["czestosc"] === opt ? "selected" : ""}`}
                  onClick={() => handleOptionClick("czestosc", opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="survey-island">
            <p className="dane-text">2. Ile wypijasz puszek w dniu, w którym sięgasz po napój?</p>
            <div className="options-container">
              {["1", "2", "3", "Więcej niż 3"].map(opt => (
                <button
                  key={opt}
                  className={`option-button ${selectedOptions["ilosc"] === opt ? "selected" : ""}`}
                  onClick={() => handleOptionClick("ilosc", opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="survey-island">
            <p className="dane-text">3. Dlaczego spożywasz napoje energetyczne?</p>
            <div className="options-container">
              {["Pobudzenie", "Skupienie", "Smak", "Presja znajomych", "Z przyzwyczajenia", "Inne"].map(opt => (
                <button
                  key={opt}
                  className={`option-button ${selectedOptions["powod"] === opt ? "selected" : ""}`}
                  onClick={() => handleOptionClick("powod", opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="survey-island">
            <p className="dane-text">4. W jakich sytuacjach najczęściej pijesz?</p>
            <div className="options-container">
              {["W szkole", "W domu", "Przed sprawdzianem", "Przed graniem", "W weekendy", "Inne"].map(opt => (
                <button
                  key={opt}
                  className={`option-button ${selectedOptions["sytuacja"] === opt ? "selected" : ""}`}
                  onClick={() => handleOptionClick("sytuacja", opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="survey-island">
            <p className="dane-text">5. Czy czułeś/aś się kiedyś źle po wypiciu napoju energetycznego?</p>
            <div className="options-container">
              {["Tak", "Nie"].map(opt => (
                <button
                  key={opt}
                  className={`option-button ${selectedOptions["reakcja"] === opt ? "selected" : ""}`}
                  onClick={() => handleOptionClick("reakcja", opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="survey-island">
            <p className="dane-text">6. Czy chcesz dowiedzieć się więcej o ich skutkach?</p>
            <div className="options-container">
              {["Tak", "Nie"].map(opt => (
                <button
                  key={opt}
                  className={`option-button ${selectedOptions["wiedza"] === opt ? "selected" : ""}`}
                  onClick={() => handleOptionClick("wiedza", opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="survey-island">
            <button className="submit-button" onClick={handleSubmit}>Zakończ i wyślij</button>
          </div>
        </>
      );
      break;
    default:
      content = <p className="dane-text">Wybierz ankietę.</p>;
  }

  const ButtonWithText = ({ buttonName }) => (
    <button
      className="dane-button"
      onClick={() => handleButtonClick(buttonName)}
    >
      {buttonName}
    </button>
  );

  const goBack = () => {
    setActiveButton(null);
  };

  return (
    <div>
      <h2>Ankieta</h2>
      {activeButton ? (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img src="./ankietachłopak.png" alt="Ankieta Chłopak" style={{ marginRight: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', left: 0, transform: 'translateX(20%)' }} />
          <div className="survey-content">
            <div>
              <button className="back-button" onClick={goBack}>◀</button>
              {content}
            </div>
          </div>
          <img src="./ankietadziewczyna.png" alt="Ankieta Dziewczyna" style={{ marginLeft: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', right: 0, transform: 'translateX(-20%)' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img src="./ankietachłopak.png" alt="Ankieta Chłopak" style={{ marginRight: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', left: 0, transform: 'translateX(20%)' }} />
          <div>
            <ButtonWithText buttonName="Energetyki" />
          </div>
          <img src="./ankietadziewczyna.png" alt="Ankieta Dziewczyna" style={{ marginLeft: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', right: 0, transform: 'translateX(-20%)' }} />
        </div>
      )}
    </div>
  );
}

export default Ankieta;
